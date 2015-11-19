"use stric";

function Pregunta(enunciado){
  this.enunciado = enunciado;
}

function pCorta(enunciado){
  Pregunta.call(this,enunciado);
  this.vista = "<input type='text' id='pCorta'>" + this.enunciado + "</input>";
}

function pLarga(enunciado){
  Pregunta.call(this,enunciado);
  this.vista = "<textarea name='name' rows='2' cols='40'>" + this.enunciado + "</textarea>";
}

module.exports = Pregunta;
module.exports = pCorta;
module.exports = pLarga;
