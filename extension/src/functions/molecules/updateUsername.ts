import { ExtensionContext } from "vscode"
import { showInputBox, saveToGlobalState, showInfoMessage } from "../atoms"
import { CONSTANTS } from "../../Constants"

const updateUsername = async (ctx: ExtensionContext) => {
  const currentUsername: string | undefined = ctx.globalState.get(
    CONSTANTS.usernameKey
  )

  const newUsername = await showInputBox(
    "Type your username",
    "Username",
    false,
    currentUsername
  )

  if (!newUsername) {
    showInfoMessage("Username cannot update. Please try again later.")
  }

  const res = await saveToGlobalState(ctx, {
    key: CONSTANTS.usernameKey,
    value: newUsername as string
  })

  if (res) {
    showInfoMessage("Username updated successfully.")
  }
}

export default updateUsername
