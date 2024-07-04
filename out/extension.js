const vscode = require('vscode');
const fs = require('fs');
const path = require('path');
function activate(context) {
  let disposable = vscode.commands.registerCommand('extension.createExpressTemplate', function () {
    const rootPath = vscode.workspace.rootPath;
    if (!rootPath) {
      vscode.window.showErrorMessage('Abra uma pasta antes de executar este comando.');
      return;
    }
    createExpressTemplate(rootPath);
    vscode.window.showInformationMessage('Estrutura de projeto Express.js criada!');
  });
  context.subscriptions.push(disposable);
}
function createExpressTemplate(rootPath) {
  const folders = ['src', 'src/controllers', 'src/models', 'src/routes', 'src/views'];
  const files = {
    'src/app.js': `import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
import indexRouter from './routes/index.js';
app.use('/', indexRouter);

app.listen(port, () => {
    console.log(\`Server is running on port \${port}\`);
});

export default app;`,
    'src/routes/index.js': `import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World!');
});

export default router;`,
    'src/models/exampleModel.js': `// Example model
const exampleSchema = {
    exampleField: String
};

export default exampleSchema;`,
    'src/controllers/exampleController.js': `// Example controller
export const exampleFunction = (req, res) => {
    res.send('Example response');
};`,
    'package.json': `{
  "name": "your template",
  "version": "1.0.0",
  "description": "Template for Express.js project",
  "main": "src/app.js",
  "type": "module",
  "scripts": {
    "start": "node src/app.js"
  },
  "dependencies": {
    "dotenv": "^10.0.0",
    "express": "^4.17.1",
    "pg": "^8.7.1",
    "cors": "^2.8.5",
    "body-parser": "^1.19.0"
  }
}`
  };
  folders.forEach(folder => {
    const folderPath = path.join(rootPath, folder);
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, {
        recursive: true
      });
    }
  });
  Object.keys(files).forEach(filePath => {
    const absolutePath = path.join(rootPath, filePath);
    if (!fs.existsSync(absolutePath)) {
      fs.writeFileSync(absolutePath, files[filePath]);
    }
  });
}
function deactivate() {}
module.exports = {
  activate,
  deactivate
};