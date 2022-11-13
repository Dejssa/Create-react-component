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
    // @ts-ignore - function exists.
    const fixedName = name.replaceAll(' ', '').replaceAll('\t', '')
    const capName = fixedName[0].toUpperCase() + fixedName.substring(1)
    
    replace += setStateText(fixedName, capName)
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