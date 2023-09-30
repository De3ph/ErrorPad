import * as vscode from "vscode"

const saveToGlobalState = (
  ctx: vscode.ExtensionContext,
  payload: {
    key: string
    value: string
  }
) => {
  const isExist = ctx.globalState.get(payload.key)

  if (isExist) {
    ctx.globalState.update(payload.key, payload.value)
    return ctx.globalState.get(payload.key)
  }

  ctx.globalState.setKeysForSync([payload.key])
  ctx.globalState.update(payload.key, payload.value)
  return ctx.globalState.get(payload.key)
}

export default saveToGlobalState
