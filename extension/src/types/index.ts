import { Diagnostic } from "vscode"

export type AvailableLanguages = "python" | "typescript" | "unknown"

export type ErrorData = {
  lang: AvailableLanguages
  code: string
  message: string
  line: number
  rawData?: Diagnostic
}
