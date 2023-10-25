import { window } from "vscode"
import { AvailableLanguages } from "../../types"

const getCurrentDocumentLangId = () => {
  const langId = window.activeTextEditor?.document.languageId
  return langId ? (langId as AvailableLanguages) : null
}

export default getCurrentDocumentLangId
