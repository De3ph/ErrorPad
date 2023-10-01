import { ExtensionContext } from "vscode"
import { showInfoMessage, showInputBox } from "../atoms"
import { CONSTANTS } from "../../Constants"

const checkCredentialsOnStartup = async (ctx: ExtensionContext) => {
  const globalState = ctx.globalState

  const isUsernameExists = globalState.get(CONSTANTS.usernameKey)
  const isPaswordExists = globalState.get(CONSTANTS.passwordKey)

  if (!isUsernameExists) {
    const username = await showInputBox(
      "Enter your ErrorPad username: ",
      "Username"
    )

    globalState.update(CONSTANTS.usernameKey, JSON.stringify(username))

    showInfoMessage("Username saved!")
  }

  if (!isPaswordExists) {
    const password = await showInputBox(
      "Enter your ErrorPad password: ",
      "Password",
      true
    )

    globalState.update(CONSTANTS.passwordKey, JSON.stringify(password))

    showInfoMessage("Password saved!")
  }
}

export default checkCredentialsOnStartup
