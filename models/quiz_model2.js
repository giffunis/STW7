var AbstractQuiz = require('../models/abstract_quiz_model.js');
var pCorta = require('../models/preguntas.js');
var pLarga = require('../models/preguntas.js');
var Respuesta = require('../models/respuesta.js');


function Quiz() {
  AbstractQuiz.call(this);
  this.q.push(
    { pregunta: new pCorta('¿Capital de Italia?'),
      respuesta: new Respuesta(/^\s*roma\s*$/i)
    }
  // debug(this.q);
  );
}

Quiz.prototype = new AbstractQuiz();
Quiz.prototype.constructor = Quiz;

module.exports = Quiz;
