import { Diagnostic } from "vscode"

export type AvailableLanguages = "python" | "typescript" | "unknown"

export type ErrorData = {
  date: string
  data: Data
}

export type Data = {
  lang: AvailableLanguages
  code: string
  message: string
  line: number
  rawData?: Diagnostic
}