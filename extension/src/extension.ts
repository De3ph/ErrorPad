import * as vscode from "vscode"
import {
  checkCredentialsOnStartup,
  onDocumentSave
} from "./functions/molecules"

vscode.workspace.onDidSaveTextDocument((_: vscode.TextDocument) => {
  onDocumentSave()
})

export async function activate(context: vscode.ExtensionContext) {
  await checkCredentialsOnStartup(context)
}

// This method is called when your extension is deactivated
export function deactivate() {}
