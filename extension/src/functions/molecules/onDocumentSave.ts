import {
  getDiagnostics,
  getCurrentDocumentURI,
  filterDiagnostic,
  preapreApiData,
  getCurrentDocumentLangId
} from "../atoms"

import sessionStore from "../../stores/SessionStore"
import { ErrorData } from "../../types"

const onDocumentSave = async () => {
  const diags = getDiagnostics(getCurrentDocumentURI())

  const filteredDiags = filterDiagnostic(diags)

  const data = preapreApiData(
    filteredDiags,
    getCurrentDocumentLangId() ?? "unknown"
  ) satisfies ErrorData[]

  sessionStore.append(data)

}

export default onDocumentSave
