import * as vscode from "vscode"
import axios from "axios"
import {
  checkCredentialsOnStartup,
  onDocumentSave,
  updatePassword,
  updateUsername
} from "./functions/molecules"
import { CONSTANTS } from "./Constants"
import sessionStore from "./stores/SessionStore"
import sendDataToServer from "./functions/atoms/sendDataToServer"

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
  sendDataToServer(sessionStore.getStore())
}
