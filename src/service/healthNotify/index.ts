// 身体健康提醒
// 定时提醒:
// 活动颈椎
// 保护眼睛
// 站立起身
// 走两步
import * as vscode from 'vscode';
const healthNotify = vscode.commands.registerCommand('lianghongCustomExt.laozi', () => {
  vscode.window.showInformationMessage('laozi from 良宏自用插件!');
});

export default healthNotify;