"use stric";

function Respuesta(respuesta){

 var f;
  if(typeof(respuesta) === 'string' || typeof(respuesta) === 'number') {
    f =  function(x){return x === respuesta;};
  }else if (respuesta.__proto__.toString() === '/(?:)/') {
    // var aux = this.respuesta;
    f =  function(x){return x.match(respuesta);};
  }
  else  {
    f =  respuesta;
  }

  f.__proto__ = this.__proto__;
  return f;
}


module.exports = Respuesta;
