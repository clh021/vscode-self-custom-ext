// 老子经文
// 早上9点前，启动触发
import * as vscode from 'vscode';
const laozi = vscode.commands.registerCommand('lianghongCustom.laozi', () => {
    vscode.window.showInformationMessage('laozi from 良宏自用插件!');
});

export default laozi;