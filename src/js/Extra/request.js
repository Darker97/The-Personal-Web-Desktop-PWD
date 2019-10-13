/**
 * Pull-request to the given Link
 * @param {String} Link
 * @param {String} Message
 */
export function Pull (Link, Message) {
// TODO: Pull-function
}

/**
 * Push-request to the given Link
 * @param {String} Link
 * @param {String} Message
 */
export function Push (Link, Message) {
// TODO: Push-function
}

/**
 * Put-request to the given Link
 * @param {String} Link
 * @param {String} Message
 */
export function Put (Link, Message) {
// TODO: Put-function
}

/**
 * Get-request to the given Link
 * @param {String} Link
 * @param {String} Message
 */
export function Get (Link, Message) {
// TODO: Get-function
  fetch(Link, {
    method: 'GET',
    headers: { 'content-type': 'application/json' },
    body: Message
  })
    .then(response => {
      console.log(response)
    })
    .catch(err => {
      console.log(err)
    })
}

/**
 * Delete-request to the given Link
 * @param {String} Link
 * @param {String} Message
 */
export function Delete (Link, Message) {
// TODO: Delete-function
}
