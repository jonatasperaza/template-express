# Express Template Extension

Esta extensão do Visual Studio Code cria uma estrutura de projeto Express.js completa com a configuração básica e dependências necessárias.

## Recursos

- Criação automática de estrutura de pastas:
  - `src/`
  - `src/controllers/`
  - `src/models/`
  - `src/routes/`
  - `src/views/`
- Arquivos padrão:
  - `src/app.js` - Configuração principal do Express.
  - `src/routes/index.js` - Rotas básicas.
  - `src/models/exampleModel.js` - Modelo de exemplo.
  - `src/controllers/exampleController.js` - Controlador de exemplo.
  - `src/views/index.html` - Página HTML de exemplo.
  - `package.json` - Arquivo de configuração do NPM com dependências.

## Dependências

A extensão configura o `package.json` com as seguintes dependências:

- `express`
- `dotenv`
- `pg` (PostgreSQL)
- `cors`
- `body-parser`

## Instalação

1. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.
2. Instale o Visual Studio Code a partir de [code.visualstudio.com](https://code.visualstudio.com/).
3. Instale a extensão do VS Code para Express Template.

## Uso

1. Abra o Visual Studio Code.
2. Abra uma pasta onde você deseja criar o novo projeto Express.js.
3. Abra a Command Palette (Ctrl+Shift+P).
4. Execute o comando `Create Express Template`.
5. A estrutura do projeto será criada automaticamente na pasta aberta.