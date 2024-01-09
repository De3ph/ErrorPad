import { Diagnostic } from "vscode"
import { AvailableLanguages, ErrorData } from "../../types"

const getCode = (item: Diagnostic) => {
  if (typeof item.code === "object") {
    return item.code.value as string
  } else if (typeof item.code === "string") {
    return item.code as string
  } else if (typeof item.code === "undefined") {
    return item.message as string
  } else {
    return typeof item.code !== "undefined"
      ? item.code.valueOf().toString()
      : "No provided code value from linters :("
  }
}

const preapreApiData = (
  diagnostic: Diagnostic[],
  languageId: AvailableLanguages
) => {
  const data = diagnostic.map<ErrorData>((item) => {
    return {
      date: new Date().toLocaleString(),
      source: item.source ? item.source : "unknown",
      lang: languageId,
      code: getCode(item),
      message: item.message,
      // line starts from 0
      line: item.range.end.line + 1
    } satisfies ErrorData
  })

  return data
}

export default preapreApiData
