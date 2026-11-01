# Portfólio de Matheus Vieira

Site pessoal feito com React, Tailwind CSS e Lucide Icons, publicado na Vercel.

## Rodar localmente

```bash
npm install
npm run dev
```

`npm run build` verifica os tipos, gera o site em `dist/` e pré-renderiza o HTML para buscadores e prévias de link.

## Atualizar o conteúdo

Todo o texto está em `src/content.ts`. Os componentes em `src/components/` só cuidam do layout.

- **Currículo:** edite `curriculo/curriculo.html` e rode `npm run curriculo`. O script usa o Edge instalado para gerar `public/curriculo-matheus-vieira.pdf` e avisa se passar de uma página.
- **Imagens de projeto:** coloque em `public/projects/` e preencha o campo `image` do projeto em `src/content.ts`.

## Publicar na Vercel

Importe o repositório na Vercel. Ela detecta o Vite sozinha: comando de build `npm run build` e pasta de saída `dist`.
