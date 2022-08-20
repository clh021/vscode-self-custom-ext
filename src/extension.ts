import * as vscode from 'vscode';
import laozi from './service/laozi';
import aphorisms from './service/aphorisms';
import teaNotify from './service/teaNotify';
import healthNotify from './service/healthNotify';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "lianghongCustom" is now active!');

	let disposable = vscode.commands.registerCommand('lianghongCustom.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from 良宏自用插件!');
	});

	context.subscriptions.push(disposable, laozi, aphorisms, healthNotify, teaNotify);
}

export function deactivate() { }
