export class User {
/**
 * Constructor for the User Objects
 * @param {String} name
 * @param {String} Password
 * @param {URL} Picture
 * @param {String} UserName
 */
  constructor (name, Password, Picture, UserName) {
    this.name = name
    this.Password = Password
    this.Picture = Picture
    this.UserName = UserName
  }
}
