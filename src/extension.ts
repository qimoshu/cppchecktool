// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as init from './init';


// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	
	let disposable = vscode.commands.registerCommand('cppcheck-tool.scanCurrentFile', () => {
        if (init.init())
        {
            vscode.window.showInformationMessage('Scanning current file...');
        }else{
            vscode.window.showInformationMessage('Failed to scan current file.');
        }
        // 你可以在这里添加具体的命令逻辑
    });

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
