/**
 * generates a local Secret, used as a hash for the Crypto library
 * @param {String} Question
 */
export function generateSecret (Question) {
  const arr = new Uint32Array(32)
  window.crypto.getRandomValues(arr)
  let tempString = ''

  arr.forEach(element => {
    tempString += element.toString()
  })
  return tempString
}

/**
     * encrypts the Message with the Password and the Secret
     * @param {JSON-String} Message
     * @param {String} Password
     * @param {String} Secret
     */
export function encryption (Message, Password, Secret) {
  var result = window.btoa(Message)
  // var result = ''
  // var key = Password + Secret + Secret + Password
  // key = window.btoa(Message)

  // for (var i = 0; i < Message.length; i++) {
  //   result += String.fromCharCode(Message.charCodeAt(i) ^ key.charCodeAt(i))
  // }

  return result
}

/**
     * decrypts the Message with the Password and the Secret
     * @param {encrypted-String} Message
     * @param {String} Password
     * @param {String} Secret
     */
export function decryption (Message, Password, Secret) {
  var result = ''
  // var key = Password + Secret + Secret + Password
  // key = window.btoa(Message)

  // for (var i = 0; i < Message.length; i++) {
  //   result += String.fromCharCode(Message.charCodeAt(i) || key.charCodeAt(i))
  // }
  result = window.atob(Message)
  return result
}
