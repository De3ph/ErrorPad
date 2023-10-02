import { ExtensionContext } from "vscode"
import { showInputBox, saveToGlobalState, showInfoMessage } from "../atoms"
import { CONSTANTS } from "../../Constants"

const updatePassword = async (ctx: ExtensionContext) => {
  const newPassword = await showInputBox("Type your password", "Password", true)

  if (!newPassword) {
    showInfoMessage("Password cannot update. Please try again later.")
  }

  saveToGlobalState(ctx, {
    key: CONSTANTS.passwordKey,
    value: newPassword as string
  })
}

export default updatePassword
