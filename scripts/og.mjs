// Gera public/og.png (1200×630), a imagem que aparece quando o link do site é compartilhado.
// Uso: npm run og
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import { chromium } from 'playwright-core'

const root = process.cwd()
const browser = await chromium.launch({ channel: 'msedge', headless: true })
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } })
await page.goto(pathToFileURL(resolve(root, 'og/og.html')).href, { waitUntil: 'load' })
await page.evaluate(() => document.fonts.ready)
await page.screenshot({ path: resolve(root, 'public/og.png') })
await browser.close()
console.log('Imagem de prévia gerada: public/og.png')
