import { Credentials, ErrorData } from "../types/index"

export class SessionStore {
  credentials: Credentials = {
    email: null,
    password: null
  }
  store: Array<ErrorData> = []

  constructor() {}

  append = (data: ErrorData[]) => {
    this.store = this.store.concat(data)
  }

  // write store getter
  getStore = () => {
    return this.store
  }

  setEmail = (email: string) => {
    this.credentials.email = email
  }

  setPassword = (password: string) => {
    this.credentials.password = password
  }
}

const sessionStore = new SessionStore()

export default sessionStore
