class Space {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    // set to temblet litere make it easy to to create string use valubles
    this.id = `space-${x}-${y}`; // close with back tecs
    this.token = null;
    this.diameter = 76;
    this.radius = this.diameter/2;
  }
  /*
  A "render method" is a term I'm using to describe a way to create the visual components
  associated with each of our JavaScript objects. These methods write the HTML for the
  visual components and attach the HTML to the DOM.
  */
/*
* Draws SVG space
*/
  drawSVGSpace(){
    const svgSpace = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    svgSpace.setAttributeNS(null, "id", this.id);
    svgSpace.setAttributeNS(null, "cx", (this.x * this.diameter) + this.radius);
    svgSpace.setAttributeNS(null, "cy", (this.y * this.diameter) + this.radius);
    svgSpace.setAttributeNS(null, "r", this.radius - 8);
    svgSpace.setAttributeNS(null, "fill", "black");
    svgSpace.setAttributeNS(null, "stroke", "none");

    document.getElementById("mask").appendChild(svgSpace);
  }
  /**
 * Updates space to reflect a token has been dropped into it.
 * @param {Object} token - The dropped token
 */
 mark(token){
   this.token = token;
 }
 /**
 * Checks if space has an associated token to find its owner
 * @return  {(null|Object)} Returns null or the owner object of the space's associated token.
 */
 get owner(){
   if (this.token === null) {
        return null;
    } else {
        return this.token.owner;
    }
 }

}
