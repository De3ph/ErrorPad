import axios from "axios"
import { CONSTANTS } from "../../Constants"
import { SessionStore } from "../../stores/SessionStore"

const sendDataToServer = (sessionStore: SessionStore) => {
  if (sessionStore.credentials.email && sessionStore.credentials.password) {
    axios.post(
      CONSTANTS.apiUrl,
      {
        data: sessionStore.getStore()
      },
      {
        auth: {
          username: sessionStore.credentials.email,
          password: sessionStore.credentials.password
        }
      }
    )
  }
}

export default sendDataToServer
