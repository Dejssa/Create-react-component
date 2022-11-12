const vscode = require('vscode');

const component = (filename) => `import React, { useState, useCallback, useMemo } from 'react'
import PropTypes from 'prop-types'

const ${filename} = () => {

	return null
}

${filename}.propTypes = {

}

${filename}.defaultProps = {

}

export default ${filename}
`



/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	const disposable = vscode.commands.registerCommand('react-help-commands.create-template', () => {
		const activeEditor = vscode.window.activeTextEditor;
		if (!activeEditor) {
			return
		}

		const filename = activeEditor.document.fileName.split('\\').pop()

		activeEditor.edit(editBuilder => {
			editBuilder.insert(activeEditor.selection.active, component(filename.split('.')[0]));
	});
	})

	context.subscriptions.push(disposable)
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
