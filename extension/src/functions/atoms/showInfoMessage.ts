import { window } from "vscode"

const showInfoMessage = (message: string) => {
  window.showInformationMessage(message)
}

export default showInfoMessage
