var AbstractQuiz = require('../models/abstract_quiz_model.js');
var PCorta = require('../models/preguntas.js');
var PLarga = require('../models/preguntas.js');
var Respuesta = require('../models/respuesta.js');


function Quiz() {
  AbstractQuiz.call(this);
  this.q.push(
    { pregunta: new PCorta('¿Capital de Italia?'),
      respuesta: new Respuesta(/^\s*roma\s*$/i)
    }
  // debug(this.q);
  );
}

Quiz.prototype = new AbstractQuiz();
Quiz.prototype.constructor = Quiz;

module.exports = Quiz;
