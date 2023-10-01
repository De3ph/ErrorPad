import { InputBoxOptions, window } from "vscode"

const showInputBox = (
  title: string,
  placeHolder: string,
  isPassword: boolean = false
) => {
  const options: InputBoxOptions = {
    title: title,
    placeHolder: placeHolder,
    password: isPassword,
    validateInput: (value) => {
      // to check strings like "   " and "  xx " (have whitespace)

      const trimmedValue = value.trim()

      if (
        trimmedValue === null ||
        trimmedValue === undefined ||
        trimmedValue === ""
      ) {
        return `${placeHolder} cannot be empty`
      }
      return null
    },
    ignoreFocusOut: true
  }

  const input = window.showInputBox(options).then((val) => val)

  return input
}

export default showInputBox
