# ADIA Framework

Landing page em Next.js App Router, React e TypeScript estrito.

## Desenvolvimento

Use Node.js 22 LTS (22.12 ou superior) ou 24 LTS e npm.

```sh
npm install
npm run dev
```

Acesse http://localhost:3000. No PowerShell com execução de scripts restrita, use `npm.cmd`.

## Produção

```sh
npm run build
npm start
```

A página inicial é pré-renderizada. A configuração padrão do Next.js permite adicionar rotas e funcionalidades de servidor.

## Estrutura

```text
src/
  app/                   # Página, layout, metadados e CSS global
  components/
    layout/              # Cabeçalho e rodapé
    sections/            # Seções da landing page
    interactive/         # Exemplo pedagógico, formulário, e-mail e ano
  hooks/                 # Estado e eventos das interações
  lib/                   # Tipos, validação e preparação do contato
public/
  img/                   # Imagens utilizadas e créditos
tests/                   # Testes de validação e interações
```

As seções de conteúdo são Server Components. As partes interativas usam Client Components.

As fontes e informações sobre as fotografias estão em [public/img/escolas/CREDITOS.md](public/img/escolas/CREDITOS.md).

## Contato

O endereço padrão é `kaua.marquesal@gmail.com`. Para configurá-lo, copie `.env.example` para `.env.local` e defina:

```dotenv
NEXT_PUBLIC_CONTACT_EMAIL=kaua.marquesal@gmail.com
```

Reinicie o servidor após alterar o ambiente. Em produção, gere um novo build. O valor opcional de `window.ADIA_CONTACT_EMAIL`, definido antes da hidratação, tem prioridade no navegador.

O formulário valida os campos, prepara um `mailto:` e permite copiar o rascunho. O visitante envia a mensagem pelo aplicativo de e-mail; a página não armazena os dados. Sem JavaScript, o contato continua disponível pelos links de e-mail.

## Verificação

```sh
npm run typecheck
npm test
npm run build
```

Os testes cobrem validação, caracteres especiais no e-mail, menu responsivo, teclado, seleção das etapas, rascunho e cópia. Usam React Testing Library e jsdom, sem enviar e-mail.

`node_modules/`, `.next/` e arquivos `*.tsbuildinfo` são gerados automaticamente e estão ignorados pelo Git.
