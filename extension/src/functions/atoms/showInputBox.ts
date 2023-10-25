import { InputBoxOptions, window } from "vscode"

const showInputBox = (
  title: string,
  placeHolder: string,
  isPassword: boolean = false,
  defaultValue?: string
) => {
  const options: InputBoxOptions = {
    title: title,
    placeHolder: placeHolder,
    password: isPassword,
    value: defaultValue ? defaultValue : undefined,
    validateInput: (value:string) => {
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

  const input = window
    .showInputBox(options)
    .then((val: string | undefined) => val)

  return input
}

export default showInputBox
