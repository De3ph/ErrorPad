import { Diagnostic } from "vscode"
import differenceWith from "lodash/differenceWith"
import isEqual from "lodash/isEqual"

import sessionStore from "../../stores/SessionStore"
import { ErrorData } from "../../types"

const filterDiagnostic = (diagnostic: Diagnostic[]) => {
  const diff = differenceWith(
    diagnostic,
    sessionStore.getStore(),
    // +1 olmasının sebebi line ın 0 dan başlaması ama store da 1 den başlaması
    (newDiag: Diagnostic, storeVal: ErrorData) =>
      isEqual(newDiag.range.end.line + 1, storeVal.data.line)
  )

  return diff
}

export default filterDiagnostic
