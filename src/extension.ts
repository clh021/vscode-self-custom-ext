import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	
	console.log('Congratulations, your extension "lianghongCustom" is now active!');

	let disposable = vscode.commands.registerCommand('lianghongCustom.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from 良宏自用插件!');
	});


	let laozi = vscode.commands.registerCommand('lianghongCustom.laozi', () => {
		vscode.window.showInformationMessage('laozi from 良宏自用插件!');
	});


	let heroHelp = vscode.commands.registerCommand('lianghongCustom.heroHelp', () => {
		vscode.window.showInformationMessage('heroHelp from 良宏自用插件!');
	});


	let helpBody = vscode.commands.registerCommand('lianghongCustom.helpBody', () => {
		vscode.window.showInformationMessage('helpBody from 良宏自用插件!');
	});


	let getTea = vscode.commands.registerCommand('lianghongCustom.getTea', () => {
		vscode.window.showInformationMessage('getTea from 良宏自用插件!');
	});

	context.subscriptions.push(disposable, laozi, heroHelp, helpBody, getTea);
}

export function deactivate() {}
