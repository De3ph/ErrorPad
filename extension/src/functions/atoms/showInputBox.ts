import { InputBoxOptions, window } from "vscode"

const showInputBox = async (title: string) => {
  const options: InputBoxOptions = {
    title: title,
    placeHolder: "Username",
    validateInput: (value) => {
      if (value === null || value === undefined || value === "") {
        return "Error"
      }
      return null
    }
  }

  const val = await window.showInputBox(options)

  return val
}

export default showInputBox
