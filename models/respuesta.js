"use stric";

function Respuesta(respuesta){
  this.respuesta = respuesta;

  if(typeof(this.respuesta) === 'string' || typeof(this.respuesta) === 'number') {
    return function(x){return x === this.respuesta;};
  }else if (this.respuesta.__proto__.toString() === '/(?:)/') {
    return function(x){return (this.respuesta).exec(x);};
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
