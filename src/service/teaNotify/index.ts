// 喝水提醒
import * as vscode from 'vscode';
const teaNotify = vscode.commands.registerCommand('lianghongCustom.laozi', () => {
    vscode.window.showInformationMessage('laozi from 良宏自用插件!');
});

export default teaNotify