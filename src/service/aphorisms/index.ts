// 名言警句，格言
import * as vscode from 'vscode';
const aphorisms = vscode.commands.registerCommand('lianghongCustom.aphorisms', () => {
    vscode.window.showInformationMessage('aphorisms from 良宏自用插件!');
});


export default aphorisms;