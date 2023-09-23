import { Uri, window } from "vscode"

const getCurrentDocumentURI = () => {
  const currentDocumentURI: Uri = window.activeTextEditor?.document.uri as Uri

  return currentDocumentURI
}

export default getCurrentDocumentURI
