
import * as vscode from 'vscode';
import * as common from './common';

let extensionNmae : string = "cppcheck-tool";
let extensionConfName : string[]  = ["cppcheckPath","Arguments","autoScan","scanPath"];
let extensionConfValue : Map<string,string> = new Map<string,string>();


function getToolConfig() : Boolean {
    //获取配置
    let logBuf :string = "please set this config: ";
    let logBufSize = logBuf.length;
    let config = vscode.workspace.getConfiguration(extensionNmae);
    for(let i = 0; i < extensionConfName.length; i++){
        if (config.get(extensionConfName[i]) !== undefined && (extensionConfName[i] !== "autoScan")) {
            extensionConfValue.set(extensionConfName[i], config.get(extensionConfName[i]) as string);
            
        }else if (extensionConfName[i] === "autoScan") {
            extensionConfValue.set(extensionConfName[i], config.get(extensionConfName[i]) as string);
        } else {
            logBuf += " [ "+ extensionConfName[i] + " ] ";
        }
        console.log(extensionConfName[i] + " : " + extensionConfValue.get(extensionConfName[i]));
    }
    if (logBuf.length > logBufSize) {
        common.showMessage(logBuf,common.MsgLevel.error);
        return false;
    }
    return true;
}

function  checkConfigisValid() : Boolean {
    for(const [key,value] of extensionConfValue){
        if (key === "cppcheckPath" ) {
            const isexist = common.checkFileExists(value);
            if (!isexist) {
                common.showMessage("cppcheckPath is not exist",common.MsgLevel.error);
                return false;
            }
        }
    }
    return true;
}

export function init() : Boolean {
    
    if(getToolConfig() && checkConfigisValid()){
        return true;
    }else{
        return false;
    }
    
}
