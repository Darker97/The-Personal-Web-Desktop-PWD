
/**
 * generates a local Secret, used as a hash for the Crypto library
 * @param {String} Question
 */
export function generateSecret (Question) {
  // TODO: generateSecret
}

/**
     * encrypts the Message with the Password and the Secret
     * @param {JSON-String} Message
     * @param {String} Password
     * @param {String} Secret
     */
export function encryption (Message, Password, Secret) {
  // TODO: encryption
  // SIEHE https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto
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

