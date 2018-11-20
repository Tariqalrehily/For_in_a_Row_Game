class Player {
/*
How will you differentiate between player objects? Will players have a name, or an ID?
How would an ID be created or set?
How will a player's tokens be stored? How many tokens should each player have?
 How will you store or set that number?
How will each player's tokens be differentiated from the other player's, visually?
What are some ways to keep track of whose turn it is?
*/

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
*It should receive an argument called num that represents the number of tokens to be created.
*It should return an array of newly created token objects.
*A loop can be used to generate a new Token object on each iteration (up to num iterations).
 Be sure to pass in the appropriate arguments to the Token constructor method.
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
