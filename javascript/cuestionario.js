export default class clase_cuestionario {

    preguntas = new Map();
    evaluacion = new Map();
    constructor(){
        this.setEvaluaciones();
        this.setPreguntas();
    }
    
    getMapEvaluaciones = () =>this.evaluacion;
    getMapPreguntas = () =>this.preguntas;
    setEvaluaciones(){

        this.evaluacion.set("pregunta_1", new Array("", "Tanjiro-Nezuko-Rengoku", "Inosuke", "Zenitsu-Mitsuri", "Tomioka-Kanao-Tokito-Iguro"));
        //el map de evaluacion, es para saber según la respuesta, a que personalidad te pareces más.
        //la primera posicion del array esta vacia porque en el map de preguntas, la primera posición corresponde a la pregunta.
        this.evaluacion.set("pregunta_2", new Array("", "Tomioka-Tokito-Iguro", "Nezuko-Tanjiro-Zenitsu-Rengoku-Mitsuri", "Inosuke", "Tomioka-Kanao", "Zenitsu"));
        this.evaluacion.set("pregunta_3", new Array("", "Inosuke-Nezuko", "Tomioka-Kanao-Iguro", "Zenitsu-Rengoku", "Tanjiro", "Mitsuri", "Tokito"));
        this.evaluacion.set("pregunta_4", new Array("", "Zenitsu", "Inosuke", "Tokito", "Rengoku-Tanjiro-Nezuko-Mitsuri", "Tomioka-Kanao-Iguro"));  
        this.evaluacion.set("pregunta_5", new Array("", "Tanjiro-Nezuko-Zenitsu", "Rengoku-Inosuke", "Iguro-Mitsuri", "Kanao-Tomioka-Tokito")); 
        this.evaluacion.set("pregunta_6", new Array("", "Tanjiro-Kanao-Tokito", "Tanjiro", "Zenitsu-Nezuko", "Inosuke-Iguro", "Zenitsu-Mitsuri", "Tomioka", "Rengoku"));
        this.evaluacion.set("pregunta_7", new Array("", "0 hermanos/Inosuke-Tomioka-Iguro-Mitsuri", "1 hermano/Zenitsu-Rengoku-Tokito", "2 hermanos/Kanao", "+ de 2 hermanos/Nezuko-Tanjiro"));
        this.evaluacion.set("pregunta_8", new Array("", "Inosuke", "Tanjiro-Nezuko", "Kanao-Tomioka-Tokito-Iguro", "Rengoku", "Zenitsu-Mitsuri"));
        this.evaluacion.set("pregunta_9", new Array("", "", "Inosuke-Kanao-Rengoku", "Mitsuri", "Tanjiro", "Tokito", "Zenitsu-Iguro", "", "", "", "Nezuko", "Tomioka", ""));
        this.evaluacion.set("pregunta_10", new Array("", "Tanjiro-Rengoku-Mitsuri", "Nezuko", "Inosuke-Zenitsu", "Kanao-Tomioka-Iguro-Tokito")); 
        this.evaluacion.set("pregunta_11", new Array("", "Kanao-Mitsuri", "Rengoku-Tanjiro-Nezuko", "Zenitsu-Iguro", "Tomioka-Tokito", "Inosuke")); 
        this.evaluacion.set("pregunta_12", new Array("", "Soy un pedazo de mongolo/Inosuke", "Soy un poco lerdo/Zenitsu-Mitsuri", "Me considero en el promedio/Nezuko-Rengoku", "Soy más listo que la media/Tanjiro-Kanao-Iguro", "Soy el más listo/Tomioka-Tokito"));
        this.evaluacion.set("pregunta_13", new Array("", "Nezuko-Mitsuri", "Kanao-Tokito", "Tanjiro", "Inosuke-Rengoku", "Zenitsu", "Tomioka-Iguro"));
        this.evaluacion.set("pregunta_14", new Array("", "Rengoku-Tanjiro", "Tomioka-Tokito", "Mitsuri-Nezuko", "Iguro", "Zenitsu","Kanao","Inosuke"));
        this.evaluacion.set("pregunta_15", new Array("", "Rengoku", "Inosuke", "Kanao", "Iguro", "Mitsuri","Zenitsu","Tokito","Tanjiro","Nezuko", "Tomioka"));

    }
    setPreguntas(){
        this.preguntas.set("pregunta_1", new Array(new Array("Por lo general te consideras una persona...",  //la primera posicion del array corresponde a la pregunta
        "Muy tranquila y alegre, sin embargo, como me toquen las narices… la tenemos.", //lo demás son respuestas u opciones
        "Bastante cabezona y con mal genio, pero en verdad soy un osito de peluche.",
        "Algo asustadiza, me preocupo mucho por las cosas y no paro de darle vueltas al asunto.",
        "Muy tranquila, no soy demasiado hablador y tengo problemas para mantener una conversación larga."
        ), new Array("radio", 1)//la primera posicion del array corresponde al tipo de form y la segunda al numero de respuestas aceptadas
        ));

        this.preguntas.set("pregunta_2", new Array(new Array("En tu tiempo libre, ¿qué te gusta hacer?",  //la primera posicion del array corresponde a la pregunta
        "Me gusta quedarme en casa leyendo algún libro o viendo una película.",//lo demás son respuestas u opciones
        "Salgo con mis amigos/as para dar una vuelta y tomar algo.",
        "Te vas a hacer deporte y a entrenar para ser una persona sana y fuerte",
        "Me dedico principalmente a adelantar trabajo y/o deberes, para poder ir sobrado de tiempo.",
        "Me quedo en casa jugando a videojuegos como Jenifer Dos Santos."
        ), new Array("checkbox", 2)//la primera posicion del array corresponde al tipo de form y la segunda al numero de respuestas aceptadas
        ));
        this.preguntas.set("pregunta_3", new Array(new Array("Si fueses un guerrero o un peleador, que aspecto crees que sería más importante?",  //la primera posicion del array corresponde a la pregunta
        "Fuerza", //lo demás son respuestas u opciones
        "Habilidad",
        "Velocidad",
        "Inteligencia",
        "Puntería/Precisión",
        "Agilidad"
        ), new Array("select", 1)//la primera posicion del array corresponde al tipo de form y la segunda al numero de respuestas aceptadas
        ));
        this.preguntas.set("pregunta_4", new Array(new Array("¿Cuál es el elemento que te gusta más? (Puedes escoger dos).",  //la primera posicion del array corresponde a la pregunta
        "Rayo, como pikachu para electrocutar a la gente.", //lo demás son respuestas u opciones
        "Viento, el lobo sopló y sopló para derribarles la casa...",
        "Niebla, te gusta ser misterioso ey!",
        "Fuego, te gustaría quemar todo a tu alrededor, verdad? (llamando al 112).",
        "Agua, enserio eres más de agua que de Cocacola?"
        ), new Array("checkbox", 2)//la primera posicion del array corresponde al tipo de form y la segunda al numero de respuestas aceptadas
        ));

        this.preguntas.set("pregunta_5", new Array(new Array("¿Qué es más importante para ti?",  //la primera posicion del array corresponde a la pregunta
        "La familia es lo primero, nunca te abandona, como Rexona.", //lo demás son respuestas u opciones
        "Los amigos, porque son la familia que escoges y no te juzgan.",
        "La pareja, el amor lo puedo todo y es muy importante en la vida",
        "Yo mismo/a, al final solo puedes confiar en ti, sadboy/girl."
        ), new Array("radio", 1)//la primera posicion del array corresponde al tipo de form y la segunda al numero de respuestas aceptadas
        ));

        this.preguntas.set("pregunta_6", new Array(new Array("¿Cuál es tu pecado capital? (usa Control para elegir + de 1).",  //la primera posicion del array corresponde a la pregunta
        "Ira", //lo demás son respuestas u opciones
        "Codicia",
        "Pereza",
        "Orgullo",
        "Lujuria",
        "Envidia",
        "Gula"
        ), new Array("select", 2)//la primera posicion del array corresponde al tipo de form y la segunda al numero de respuestas aceptadas
        ));

        this.preguntas.set("pregunta_7", new Array(new Array("¿Cuántos hermanos/as tienes? (Elige la opción más aproximada).",  //la primera posicion del array corresponde a la pregunta
        1, //lo demás son respuestas u opciones
        2,
        3,
        4
        ), new Array("range", 1)//la primera posicion del array corresponde al tipo de form y la segunda al numero de respuestas aceptadas
        ));
        this.preguntas.set("pregunta_8", new Array(new Array("¿Si un amigo/a se tropieza y se cae, que haces?",  //la primera posicion del array corresponde a la pregunta
        "Me rio muchisimo y luego, como buen amigo/a, le/a ayudo.", //lo demás son respuestas u opciones
        "Corro a ayudarle/a inmediatamente.",
        "Miro insensible, le/la ignoro y sigo con lo mio.",
        "Le/la ayudo primero y luego me rio con él/ella de la situación",
        "Te desesperas, te pones histerico y llamas al 112.",
        ), new Array("checkbox", 2)//la primera posicion del array corresponde al tipo de form y la segunda al numero de respuestas aceptadas
        ));
        this.preguntas.set("pregunta_9", new Array(new Array("¿Cuál es tu signo del horóscopo? ",  //la primera posicion del array corresponde a la pregunta
        "Aries", //lo demás son respuestas u opciones
        "Tauro",
        "Géminis",
        "Cáncer",
        "Leo",
        "Virgo",
        "Libra",
        "Escorpio",
        "Sagitario",
        "Capricornio",
        "Acuario",
        "Piscis"
        ), new Array("select", 1)//la primera posicion del array corresponde al tipo de form y la segunda al numero de respuestas aceptadas
        ));
        this.preguntas.set("pregunta_10", new Array(new Array("En una fiesta eres ...",  //la primera posicion del array corresponde a la pregunta
        "Muy sociable, me relaciono con los demás.", //lo demás son respuestas u opciones
        "Soy reservado/a y me suelo quedar en una esquina con mi cubata.",
        "¡Yo soy la fiesta!",
        "Qué fiesta ni que fiesta?, me quedo en casa con el batín.",
        ), new Array("radio", 1)//la primera posicion del array corresponde al tipo de form y la segunda al numero de respuestas aceptadas
        ));
        this.preguntas.set("pregunta_11", new Array(new Array("En una relación amorosa sueles ser ...",  //la primera posicion del array corresponde a la pregunta
        "Tímido/a, me pongo nervioso/a cuando estoy a su lado.", //lo demás son respuestas u opciones
        "Soy yo mismo/a, no tengo problemas en mostrarme como soy.",
        "Muy pesado/a y siempre atento por si la otra persona necesita algo.",
        "Me hago la roca porque soy bastante estupido/a, pero estoy para lo que necesite.",
        "Soy UNIsexual, no tengo relaciones amorosas :(",
        ), new Array("radio", 1)//la primera posicion del array corresponde al tipo de form y la segunda al numero de respuestas aceptadas
        ));
        this.preguntas.set("pregunta_12", new Array(new Array("¿Cómo de inteligente crees que eres? (Elige la opción más aproximada).",  //la primera posicion del array corresponde a la pregunta
        1, //lo demás son respuestas u opciones
        2,
        3,
        4,
        5
        ), new Array("range", 1)//la primera posicion del array corresponde al tipo de form y la segunda al numero de respuestas aceptadas
        ));

        this.preguntas.set("pregunta_13", new Array(new Array("¿Cuál es tu asignatura favorita?",  //la primera posicion del array corresponde a la pregunta
        "Inglés", //lo demás son respuestas u opciones
        "Matemáticas",
        "Lengua",
        "Educación Física",
        "El recreo",
        "Historia",
        ), new Array("select", 1)//la primera posicion del array corresponde al tipo de form y la segunda al numero de respuestas aceptadas
        ));
        this.preguntas.set("pregunta_14", new Array(new Array("Escoge tu color favorito. ",  //la primera posicion del array corresponde a la pregunta
        "Rojo", //lo demás son respuestas u opciones
        "Azul",
        "Rosa",
        "Negro",
        "Amarillo",
        "Morado/Lila",
        "Verde"
        ), new Array("checkbox", 2)//la primera posicion del array corresponde al tipo de form y la segunda al numero de respuestas aceptadas
        ));
        this.preguntas.set("pregunta_15", new Array(new Array("¿Cuál de estos animales es tu favorito? (usa Control para elegir + de 1).",  //la primera posicion del array corresponde a la pregunta
        "León", //lo demás son respuestas u opciones
        "Cerdo",
        "Mariposa",
        "Serpiente",
        "Koala",
        "Canario",
        "Cuervo",
        "Oso",
        "Buho",
        "Salmón"
        ), new Array("select", 2)//la primera posicion del array corresponde al tipo de form y la segunda al numero de respuestas aceptadas
        ));
        
    }
   



}