import { ExtensionContext } from "vscode"
import { showInfoMessage, showInputBox } from "../atoms"
import { CONSTANTS } from "../../Constants"
import sessionStore from "../../stores/SessionStore"

const checkCredentialsOnStartup = async (ctx: ExtensionContext) => {
  const globalState = ctx.globalState

  const isEmailExists = globalState.get(CONSTANTS.emailKey)
  const isPaswordExists = globalState.get(CONSTANTS.passwordKey)

  if (isEmailExists) {
    showInfoMessage(`Errorpad is active...`)
  } else {
    const email = await showInputBox("Enter your ErrorPad email: ", "Email")

    globalState.update(CONSTANTS.emailKey, JSON.stringify(email))

    showInfoMessage("Email saved!")
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

  sessionStore.setEmail(globalState.get(CONSTANTS.emailKey) as string)
  sessionStore.setPassword(globalState.get(CONSTANTS.passwordKey) as string)
}

export default checkCredentialsOnStartup
