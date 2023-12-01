import axios from "axios"
import { ErrorData } from "../../types"
import { CONSTANTS } from "../../Constants"

const sendDataToServer = (data: ErrorData[]) => {
  axios.post(CONSTANTS.apiUrl, {
    data: data
  })
}

export default sendDataToServer
