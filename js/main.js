const triviaPreguntas = [
    {
      pregunta: "¿Cómo se llama el personaje de la esposa de Pepe Argento?",
      respuestas: ["Moni Argento", "Moni Bolena", "Moni Petachi"],
      respuestaCorrecta: 0,
    },
    {
      pregunta: "¿Cuántos hijos tienen Pepe y Moni Argento?",
      respuestas: ["Cinco", "Dos", "Cuatro"],
      respuestaCorrecta: 1,
    },
    {
      pregunta: "¿Cuál es el nombre del hijo menor de los Argento?",
      respuestas: ["Juan", "Junior", "Coqui"],
      respuestaCorrecta: 2,
    },
    {
      pregunta: "¿Quién es el vecino y mejor amigo de Pepe Argento?",
      respuestas: ["Dardo Fuseneco", "Miguel D'Elía", "Ricardo Arana"],
      respuestaCorrecta: 0,
    },
    {
      pregunta: "¿Qué trabajo tenía Moni antes de casarse con Pepe?",
      respuestas: ["Secretaria", "Modelo", "Cajera de supermercado"],
      respuestaCorrecta: 2,
    },
    {
      pregunta: "¿En qué país se desarrolla la versión original de 'Casados con Hijos'?",
      respuestas: ["Estados Unidos","Argentina", "España"],
      respuestaCorrecta: 1,
    },
    {
      pregunta: "¿Cómo se llama el perro de los Argento?",
      respuestas: ["Fatiga", "Sultán", "Rex"],
      respuestaCorrecta: 0,
    },
  ];
  

  function mostrarPregunta(pregunta) {
   alert(pregunta.pregunta);
    for (let i = 0; i < pregunta.respuestas.length; i++) {
     alert (`${i + 1}. ${pregunta.respuestas[i]}`);
    }
  }
  
  
  function comprobarRespuesta(pregunta, respuesta) {
    return pregunta.respuestaCorrecta === respuesta - 1;
  }
  
  
  function jugarTrivia() {
    let puntaje = 0;
  
    alert("¡Bienvenido a la Trivia de 'Casados con Hijos'!");
  
    for (let i = 0; i < triviaPreguntas.length; i++) {
      mostrarPregunta(triviaPreguntas[i]);
      const respuesta = parseInt(prompt("Ingresa el número de tu respuesta:"));
  
      if (comprobarRespuesta(triviaPreguntas[i], respuesta)) {
        alert("¡Respuesta correcta!");
        puntaje++;
      } else {
        alert("Respuesta incorrecta. La respuesta correcta era: " + triviaPreguntas[i].respuestas[triviaPreguntas[i].respuestaCorrecta]);
      }
    }
  
    alert(`Fin del juego. Tu puntaje final es: ${puntaje} de ${triviaPreguntas.length}`);
    alert(`¡Felicitaciones! Respondiste ${puntaje} preguntas correctamente.`);
  }
  

  jugarTrivia();