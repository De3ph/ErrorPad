import * as vscode from "vscode"
import {
  checkCredentialsOnStartup,
  onDocumentSave,
  updatePassword,
  updateEmail
} from "./functions/molecules"
import { CONSTANTS } from "./Constants"
import sessionStore from "./stores/SessionStore"
import sendDataToServer from "./functions/atoms/sendDataToServer"

vscode.workspace.onDidSaveTextDocument((_: vscode.TextDocument) => {
  onDocumentSave()
})

export async function activate(context: vscode.ExtensionContext) {
  vscode.commands.registerCommand(CONSTANTS.commands.updateEmail, async () => {
    await updateEmail(context)
  })

  vscode.commands.registerCommand(
    CONSTANTS.commands.updatePassword,
    async () => {
      await updatePassword(context)
    }
  )
  vscode.commands.registerCommand(CONSTANTS.commands.pushDatas, () => {
    sendDataToServer(sessionStore)
  })

  await checkCredentialsOnStartup(context)
}

// This method is called when your extension is deactivated
export function deactivate() {
  sendDataToServer(sessionStore)
}
