import { Diagnostic } from "vscode"
import { AvailableLanguages, Data, ErrorData } from "../../types"

const preapreApiData = (
  diagnostic: Diagnostic[],
  languageId: AvailableLanguages
) => {
  const data = diagnostic.map<ErrorData>((item) => {
    return {
      date: new Date().toLocaleString(),
      data: {
        lang: languageId,
        code:
          typeof item.code === "object"
            ? (item.code.value as string)
            : (item.code as string),
        message: item.message,
        // line starts from 0
        line: item.range.end.line + 1,
        rawData: item
      }
    } satisfies ErrorData
  })

  return data
}

export default preapreApiData
