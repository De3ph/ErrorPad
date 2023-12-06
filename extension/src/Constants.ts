// using Object.freeze protects the object from unwanted changes, nested objects protecting too

const CONSTANTS = Object.freeze({
  emailKey: "errorpad.email",
  passwordKey: "errorpad.password",
  commands: {
    updateEmail: "errorpad.updateEmail",
    updatePassword: "errorpad.updatePassword",
    pushDatas: "errorpad.pushDatas"
  },
  apiUrl: "http://localhost:3000/api"
})

export { CONSTANTS }
