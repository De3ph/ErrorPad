import { ErrorData } from "../types/index"

export class SessionStore {
  store: Array<ErrorData | any> = []

  constructor() {}

  append = (data: ErrorData | any) => {
    this.store = this.store.concat(data)
  }

  // write store getter
  getStore = () => {
    return this.store
  }
}

const sessionStore = new SessionStore()

export default sessionStore
