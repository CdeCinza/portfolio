// Gera o currículo em PDF a partir de curriculo/curriculo.html, usando o Edge instalado.
// Uso: npm run curriculo
//
// Saem duas versões:
//   public/curriculo-matheus-vieira.pdf   pública, sem telefone, servida pelo site
//   curriculo/<nome>-completo.pdf          completa, com telefone, só no seu computador (fora do git)
//
// Os dados pessoais da versão completa ficam em curriculo/privado.json, que também não vai para o git.
import { readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import { chromium } from 'playwright-core'

const root = process.cwd()
const source = pathToFileURL(resolve(root, 'curriculo/curriculo.html')).href
const publicOutput = resolve(root, 'public/curriculo-matheus-vieira.pdf')
const completeOutput = resolve(root, 'curriculo/Curriculo-Matheus-Marques-Fernandes-Vieira-completo.pdf')

const privateData = await readFile(resolve(root, 'curriculo/privado.json'), 'utf8')
  .then((text) => JSON.parse(text))
  .catch(() => null)

const browser = await chromium.launch({ channel: 'msedge', headless: true })

async function render(output, data) {
  const page = await browser.newPage()
  await page.goto(source, { waitUntil: 'load' })
  await page.evaluate((fields) => {
    for (const block of document.querySelectorAll('[data-private]')) {
      if (!fields) block.remove()
    }
    for (const slot of document.querySelectorAll('[data-field]')) {
      slot.textContent = fields?.[slot.dataset.field] ?? ''
    }
  }, data)
  const pdf = await page.pdf({ preferCSSPageSize: true, printBackground: true, tagged: true })
  await page.close()
  await writeFile(output, pdf)

  const pages = (pdf.toString('latin1').match(/\/Type\s*\/Page[^s]/g) ?? []).length
  console.log(`${output.replace(root, '.')} (${pages} página${pages === 1 ? '' : 's'})`)
  if (pages !== 1) {
    console.warn('Atenção: passou de uma página. Encurte o texto em curriculo/curriculo.html.')
    process.exitCode = 1
  }
}

await render(publicOutput, null)
if (privateData) await render(completeOutput, privateData)
else console.log('curriculo/privado.json não encontrado: gerada só a versão pública.')

await browser.close()
