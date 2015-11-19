"use stric";

function Respuesta(respuesta){
  this.respuesta = respuesta;


  if(typeof(this.respuesta) === 'string' || typeof(this.respuesta) === 'number') {
    return function(x){return x === this.respuesta;};
  }else if (this.respuesta.__proto__.toString() === '/(?:)/') {
    // var aux = this.respuesta;
    return function(x){return x.match(respuesta);};
  }
  else if (this.respuesta.__proto__.toString() === "function () {}") {
    return function(x){
      try {
        eval(x); /* DANGER DANGER DANGER */
        var z = Math.floor(Math.random()*100);
        return (square(z) == z*z);
      }
      catch(e) {
        return false;
      }
      return false;
    };
  }
}


module.exports = Respuesta;
