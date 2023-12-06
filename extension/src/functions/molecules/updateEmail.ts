import { ExtensionContext } from "vscode"
import { showInputBox, saveToGlobalState, showInfoMessage } from "../atoms"
import { CONSTANTS } from "../../Constants"

const updateEmail = async (ctx: ExtensionContext) => {
  const currentEmail: string | undefined = ctx.globalState.get(
    CONSTANTS.emailKey
  )

  const newEmail = await showInputBox(
    "Type your email",
    "Email",
    false,
    currentEmail
  )

  if (!newEmail) {
    showInfoMessage("Email cannot update. Please try again later.")
  }

  const res = await saveToGlobalState(ctx, {
    key: CONSTANTS.emailKey,
    value: newEmail as string
  })

  if (res) {
    showInfoMessage("Email updated successfully.")
  }
}

export default updateEmail
