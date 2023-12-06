import { Diagnostic } from "vscode"

export type AvailableLanguages = "python" | "typescript" | "unknown"

export type ErrorData = {
  date: string
  source: string
  lang: AvailableLanguages
  code: string
  message: string
  line: number
}

export type Credentials = {
  email: string | null
  password: string | null
}
