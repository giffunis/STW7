"use stric";

var Pregunta = require('../models/preguntas.js');

function PCorta(enunciado){
  Pregunta.call(this,enunciado);
  this.entrada = "<input type='text' name='respuesta' placeholder='Responda aquí' autofocus=''>";
}

module.exports = PCorta;
