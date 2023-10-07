import axios from "axios"
import * as vscode from "vscode"
import {
  checkCredentialsOnStartup,
  onDocumentSave,
  updatePassword,
  updateUsername
} from "./functions/molecules"
import { CONSTANTS } from "./Constants"

vscode.workspace.onDidSaveTextDocument((_: vscode.TextDocument) => {
  onDocumentSave()
})

export async function activate(context: vscode.ExtensionContext) {
  vscode.commands.registerCommand(
    CONSTANTS.commands.updateUsername,
    async () => {
      await updateUsername(context)
    }
  )

  vscode.commands.registerCommand(
    CONSTANTS.commands.updatePassword,
    async () => {
      await updatePassword(context)
    }
  )

  await checkCredentialsOnStartup(context)
}

// This method is called when your extension is deactivated
export function deactivate() {
  axios.post("http://localhost:3000/api", {
    msg: "hi"
  })
}
