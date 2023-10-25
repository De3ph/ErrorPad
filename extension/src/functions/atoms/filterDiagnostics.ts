import { Diagnostic } from "vscode"
import differenceBy from "lodash/differenceBy"

import sessionStore from "../../stores/SessionStore"

const filterDiagnostic = (diagnostic: Diagnostic[]) => {
  const diff = differenceBy(
    diagnostic,
    sessionStore.getStore(),
    "range.end.line"
  )

  return diff
}

export default filterDiagnostic
