# Delgada Template

A starter template for building websites using [Delgada](https://github.com/delgada-ui/delgada).

## Usage

```
npx degit delgada-ui/template my-delgada-project
cd my-delgada-project
npm install
npm run build
npm start
```

## Tip

The Delgada dev server does not yet support automatic re-builds on file changes. If using VS Code, a workaround can be accomplished using the [Run On Save](https://marketplace.visualstudio.com/items?itemName=emeraldwalk.RunOnSave) extension.

Install the extension and then create/add the below JSON to the `.vscode/settings.json` file in your project.

```json
{
  "emeraldwalk.runonsave": {
    "commands": [
      {
        "match": "\\.js$",
        "cmd": "npm run build"
      },
      {
        "match": "\\.css$",
        "cmd": "npm run build"
      },
      {
        "match": "\\.md$",
        "cmd": "npm run build"
      }
    ]
  }
}
```

## License

[MIT](LICENSE)
