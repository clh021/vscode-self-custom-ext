// 名言警句，格言
// 早上九点前全屏时触发
import * as vscode from 'vscode';
const aphorisms = vscode.commands.registerCommand('lianghongCustomExt.aphorisms', () => {
  vscode.window.showInformationMessage('aphorisms from 良宏自用插件!');
});


export default aphorisms;