import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
// let msgConfErr : string[]  = ['cppcheckPathEmpty', 'cppcheckPathError', 'ArgumentsEmpty', "ScanPathEmpty"];

// let msgConfErr_Zhcn = {
//     'cppcheckPathEmpty' : '请输入cppcheck所在路径',
//     'cppcheckPathError' : 'cppcheck路径错误,未找到相关文件',
//     'ArgumentsEmpty'    : '请输入cppcheck参数',
//     "ScanPathEmpty"     : '请输入扫描路径',
// };

// let msgConfErr_Enus = {
//     'cppcheckPathEmpty' : 'Please enter the path of cppcheck',
//     'cppcheckPathError' : 'cppcheck path error, the relevant file was not found',
//     'ArgumentsEmpty'    : 'Please enter cppcheck parameters',
//     "ScanPathEmpty"     : 'Please enter the scan path',
// }
//枚举信息类型
export enum MsgLevel {
    info,warn, error
}

export function getEnvLanguage() : string {
    return vscode.env.language;
}

//显示弹窗
export function showMessage(message: string, level: MsgLevel = MsgLevel.info) {

    if (level === MsgLevel.warn) {
        vscode.window.showWarningMessage(message);
    }else if (level === MsgLevel.error) {
        vscode.window.showErrorMessage(message);
    }else {
        vscode.window.showInformationMessage(message);
    }
}

export  function checkFileExists(filePath: string): boolean {
    const fullPath = path.resolve(filePath);
    try {
        fs.accessSync(fullPath, fs.constants.F_OK);
        return true;
    } catch (error) {
        return false;
    }
}