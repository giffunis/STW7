function Pregunta(enunciado){
  this.enunciado = enunciado;

  this.getEnunciado = function(){
    return this.enunciado;
  };

  this.setEnunciado = function(newEnunciado){
    this.enunciado = newEnunciado;
  };
}

function pCorta(enunciado){
  Pregunta.call(enunciado);
}

module.exports = Pregunta;
