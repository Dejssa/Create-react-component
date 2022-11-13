const vscode = require('vscode')
const createTemplate = require('./createTemplate')
const createSetState = require('./createSetState')

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	context.subscriptions.push(vscode.commands.registerCommand('react-help-commands.create-template', createTemplate.cmd))
	context.subscriptions.push(vscode.commands.registerCommand('react-help-commands.create-use-state', createSetState.cmd))
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
