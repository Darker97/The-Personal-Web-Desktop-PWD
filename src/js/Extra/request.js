/**
 * Pull-request to the given Link
 * @param {String} Link
 * @param {String} Message
 */
export function Pull (Link, Message) {
// TODO: Pull-function
  fetch(Link, {
    method: 'PULL',
    headers: { 'content-type': 'application/json' },
    body: Message
  })
    .then(response => {
      console.log(response)
      // TODO: Response
    })
    .catch(err => {
      console.log(err)
    })
}

/**
 * Push-request to the given Link
 * @param {String} Link
 * @param {String} Message
 */
export function Push (Link, Message) {
// TODO: Push-function
  fetch(Link, {
    method: 'PUSH',
    headers: { 'content-type': 'application/json' },
    body: Message
  })
    .then(response => {
      console.log(response)
      // TODO: Response
    })
    .catch(err => {
      console.log(err)
    })
}

/**
 * Put-request to the given Link
 * @param {String} Link
 * @param {String} Message
 */
export function Put (Link, Message) {
  fetch(Link, {
    method: 'PUT',
    headers: { 'content-type': 'application/json' },
    body: Message
  })
    .then(response => {
      console.log(response)
      // TODO: Response
    })
    .catch(err => {
      console.log(err)
    })
}

/**
 * Get-request to the given Link
 * @param {String} Link
 * @param {String} Message
 */
export function Get (Link, Message) {
  fetch(Link, {
    method: 'GET',
    headers: { 'content-type': 'application/json' },
    body: Message
  })
    .then(response => {
      console.log(response)
      // TODO: Response
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
  fetch(Link, {
    method: 'DELETE',
    headers: { 'content-type': 'application/json' },
    body: Message
  })
    .then(response => {
      console.log(response)
      // TODO: Response
    })
    .catch(err => {
      console.log(err)
    })
}
