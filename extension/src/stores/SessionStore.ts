import { ErrorData } from "../types/index"

export class SessionStore {
  store: Array<ErrorData> = []

  constructor() {}

  append = (data: ErrorData[]) => {
    this.store = this.store.concat(data)
  }

  // write store getter
  getStore = () => {
    return this.store
  }
}

const sessionStore = new SessionStore()

export default sessionStore
