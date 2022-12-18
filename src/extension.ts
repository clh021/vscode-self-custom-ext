import * as vscode from 'vscode';
import laozi from './service/laozi';
import aphorisms from './service/aphorisms';
import teaNotify from './service/teaNotify';
import healthNotify from './service/healthNotify';

export function activate (context: vscode.ExtensionContext) {

  console.log('Congratulations, your extension "lianghongCustomExt" is now active!');

  let disposable = vscode.commands.registerCommand('lianghongCustomExt.helloWorld', () => {
    vscode.window.showInformationMessage('Hello World from 良宏自用插件!');
  });

  context.subscriptions.push(disposable);
  context.subscriptions.push(laozi);
  context.subscriptions.push(aphorisms);
  context.subscriptions.push(teaNotify);
  context.subscriptions.push(healthNotify);
}

export function deactivate () { }
