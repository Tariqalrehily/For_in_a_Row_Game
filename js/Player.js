class Player {


  constructor (name, id, color, active = false) {
    this.name = name;
    this.id = id;
    this.color = color;
    this.active = active;
    // 21 is half number of the board
    this.tokens = this.createTokens(21);

  }
/**
* Creates token objects for players
* @param {integer} num - Number of token objects to be created
* Player class createTokens() method:
*/

createTokens(num) {
  const tokens = [];

  for (let i = 0; i < num; i++) {
    let token = new Token(i, this);
    tokens.push(token);
  }
  return tokens;
}
/** gets all tokens that haven't been dropped.
* @return {array} Array of unused tokens.
*/
  get unusedTokens(){
    return this.tokens.filter(token => !token.dropped);
  }

  /**
  * Gets the active token by returning the first token in the array of unused tokens.
  *@return {Object} First token object in the array of unused tokens.
  */

  get activeToken(){
    return this.unusedTokens[0];
  }
  /**
 * Check if a player has any undropped tokens left
 * @return {Boolean}
 */
  checkTokens(){
      return this.unusedTokens.length == 0 ? false : true;
  }
}
