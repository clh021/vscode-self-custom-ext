// 身体健康提醒
import * as vscode from 'vscode';
const healthNotify = vscode.commands.registerCommand('lianghongCustom.laozi', () => {
    vscode.window.showInformationMessage('laozi from 良宏自用插件!');
});

export default healthNotify