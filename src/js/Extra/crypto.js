
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
  return crypto.subtle.encrypt({ name: 'RSA-OAEP' }, Password + Secret, Message)
}

/**
     * decrypts the Message with the Password and the Secret
     * @param {encrypted-String} Message
     * @param {String} Password
     * @param {String} Secret
     */
export function decryption (Message, Password, Secret) {
  // TODO: decryption
}
