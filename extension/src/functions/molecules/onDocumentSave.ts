import {
  getDiagnostics,
  getCurrentDocumentURI,
  filterDiagnostic,
  preapreApiData,
  getCurrentDocumentLangId
} from "../atoms"

import sessionStore from "../../stores/SessionStore"

const onDocumentSave = async () => {
  const diags = getDiagnostics(getCurrentDocumentURI())

  const filteredDiags = filterDiagnostic(diags)

  const data = preapreApiData(
    filteredDiags,
    getCurrentDocumentLangId() ?? "unknown"
  )

  sessionStore.append(data)
}

export default onDocumentSave
