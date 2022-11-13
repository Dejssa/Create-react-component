const vscode = require('vscode')

const setStateText = (name, capName) => `const [${name}, set${capName}] = useState(null)`

const cmd = () => {
  const activeEditor = vscode.window.activeTextEditor;
  if (!activeEditor) {
    return
  }

  let replace = ''

  const names = activeEditor.document.getText(activeEditor.selection).split('\n')

  names.forEach((name, index) => {
    const capName = name[0].toUpperCase() + name.substring(1)
    
    replace += setStateText(name, capName)
    if (index + 1 !== names.length) {
      replace += '\n'
    }
  })

  activeEditor.edit(editBuilder => {
    editBuilder.replace(activeEditor.selection, replace)
  })
}

module.exports = {
  cmd
}