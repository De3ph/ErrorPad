import * as vscode from "vscode"
import { showInfoMessage } from "./functions/atoms"
import { onDocumentSave } from "./functions/molecules"

vscode.workspace.onDidSaveTextDocument((document: vscode.TextDocument) => {
    onDocumentSave()
  })

export function activate(context: vscode.ExtensionContext) {
    showInfoMessage('Hellllo')
}

// This method is called when your extension is deactivated
export function deactivate() {}
