import {
  getDiagnostics,
  getCurrentDocumentURI,
} from "../atoms"

const onDocumentSave = () => {
  const diags = getDiagnostics(getCurrentDocumentURI())?.length

  // TODO: burada hataları kaydetmemiz lazım bir yerde, sonrasında extension deactive olduğunda api ile server e göndericek

  console.log(`${diags} diagnostics detected.`)
}

export default onDocumentSave
