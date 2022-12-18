// 喝水提醒
// 根据编辑器持续的活动时间达到一定临界值提醒
import * as vscode from 'vscode';
const teaNotify = vscode.commands.registerCommand('lianghongCustomExt.laozi', () => {
  vscode.window.showInformationMessage('laozi from 良宏自用插件!');
});

export default teaNotify;