// Gera o HTML final da página no build, para buscadores e prévias de link lerem o conteúdo sem JavaScript.
import { readFile, rm, writeFile } from 'node:fs/promises'
import { pathToFileURL } from 'node:url'
import { resolve } from 'node:path'

const root = process.cwd()
const htmlPath = resolve(root, 'dist/index.html')
const { render } = await import(pathToFileURL(resolve(root, 'dist-ssr/entry-server.js')).href)

const template = await readFile(htmlPath, 'utf8')
if (!template.includes('<!--app-html-->')) {
  throw new Error('Marcador <!--app-html--> não encontrado em dist/index.html')
}

await writeFile(htmlPath, template.replace('<!--app-html-->', render()))
await rm(resolve(root, 'dist-ssr'), { recursive: true, force: true })
console.log('Pré-renderização concluída: dist/index.html')
