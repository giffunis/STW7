function Pregunta(enunciado){
  this.enunciado = enunciado;

  this.getEnunciado = function(){
    return this.enunciado;
  };

  this.setEnunciado = function(newEnunciado){
    this.enunciado = newEnunciado;
  };
}

module.exports Pregunta;
