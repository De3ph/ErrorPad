import { languages, type Uri } from "vscode"

const getDiagnostics = (documentURI: Uri) => {
  return languages.getDiagnostics(documentURI)
}

export default getDiagnostics
