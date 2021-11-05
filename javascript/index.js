import clase_cuestionario from "./cuestionario.js";//importando la clase bombas
var cuestionario = new clase_cuestionario();



var preguntas = new Map();
var evaluacion = new Map();

var personajes = new Map();
var cont;
var limite;
window.onload = function () {
    console.log(cuestionario.getMapEvaluaciones());
    cont = 0;
    let botonquiz = document.getElementById("botonquiz");
    botonquiz.addEventListener("click", seccionquiz);
    let botonkimetsu = document.getElementById("botonkimetsu");
    botonkimetsu.addEventListener("click", seccionkimetsu);

    establecerpersonajes();
    establecerpreguntas();
    limite = preguntas.size;
    console.log(limite);
    let start = document.getElementById("start");
    start.addEventListener("click", crearpregunta);

    let volver = document.getElementById("volveraempezar");
    volver.addEventListener("click", volverinicio);


}
function seccionquiz() {
    console.log("BURRANDO");
    let kimetsu = document.getElementById("kimetsu");
    kimetsu.style.display = "none";
    let quiz = document.getElementById("quiz");
    quiz.style.display = "block";
    let preguntaaeliminar = "pregunta_" + cont;

    volverinicio();

    let body = document.getElementById("body");
    let pregunta = document.getElementById(preguntaaeliminar);

    if (pregunta) {
        body.removeChild(pregunta);

    }


}
function seccionkimetsu() {

    let quiz = document.getElementById("quiz");
    quiz.style.display = "none";
    let kimetsu = document.getElementById("kimetsu");
    kimetsu.style.display = "block";
    let preguntaaeliminar = "pregunta_" + cont;

    volverinicio();

    let body = document.getElementById("body");
    let pregunta = document.getElementById(preguntaaeliminar);
    if (pregunta) {
        body.removeChild(pregunta);

    }

}
function establecerpersonajes() {
    personajes.set("Tanjiro", 0);
    personajes.set("Nezuko", 0);
    personajes.set("Inosuke", 0);
    personajes.set("Zenitsu", 0);
    personajes.set("Tomioka", 0);
    personajes.set("Kanao", 0);
    personajes.set("Rengoku", 0);

}
function resetpersonajes() {
    for (var [key, value] of personajes) {
        personajes.set(key, 0)
    }

}
function establecerpreguntas() {

    preguntas.set("pregunta_1", new Array(new Array("Por lo general te consideras una persona...",  //la primera posicion del array corresponde a la pregunta
        "Muy tranquila y alegre, sin embargo, como me toquen las narices… la tenemos.", //lo demás son respuestas u opciones
        "Bastante cabezona y con mal genio, pero en verdad soy un osito de peluche.",
        "Algo asustadiza, me preocupo mucho por las cosas y no paro de darle vueltas al asunto.",
        "Muy tranquila, no soy demasiado hablador y tengo problemas para mantener una conversación larga."
    ), new Array("radio", 1)//la primera posicion del array corresponde al tipo de form y la segunda al numero de respuestas aceptadas
    ));
    evaluacion.set("pregunta_1", new Array("", "Tanjiro-Nezuko-Rengoku", "Inosuke", "Zenitsu", "Tomioka-Kanao"));
    //el map de evaluacion, es para saber según la respuesta, a que personalidad te pareces más.
    //la primera posicion del array esta vacia porque en el map de preguntas, la primera posición corresponde a la pregunta.

    preguntas.set("pregunta_2", new Array(new Array("En tu tiempo libre, ¿qué te gusta hacer?",  //la primera posicion del array corresponde a la pregunta
        "Me gusta quedarme en casa haciendo leyendo algún libro o viendo una película.",//lo demás son respuestas u opciones
        "Salgo con mis amigos para dar una vuelta y tomar algo.",
        "Te vas a hacer deporte y a entrenar para ser una persona sana y fuerte",
        "Me dedico principalmente a adelantar trabajo y/o deberes, para poder ir sobrado de tiempo.",
        "Me quedo en casa jugando a videojuegos como Jenifer Dos Santos."
    ), new Array("checkbox", 2)//la primera posicion del array corresponde al tipo de form y la segunda al numero de respuestas aceptadas
    ));
    evaluacion.set("pregunta_2", new Array("", "Tomioka", "Nezuko-Tanjiro-Zenitsu-Rengoku", "Inosuke", "Tomioka-Kanao", "Zenitsu"));

    preguntas.set("pregunta_3", new Array(new Array("Si fueses un guerrero o un peleador, que aspecto crees que sería más importante?",  //la primera posicion del array corresponde a la pregunta
        "Fuerza", //lo demás son respuestas u opciones
        "Habilidad",
        "Velocidad",
        "Inteligencia"
    ), new Array("select", 1)//la primera posicion del array corresponde al tipo de form y la segunda al numero de respuestas aceptadas
    ));
    evaluacion.set("pregunta_3", new Array("", "Inosuke-Nezuko", "Tomioka-Kanao", "Zenitsu-Rengoku", "Tanjiro"));

    preguntas.set("pregunta_4", new Array(new Array("¿Cuál es el elemento que te gusta más? (Puedes escoger dos).",  //la primera posicion del array corresponde a la pregunta
        "Rayo, como pikachu para electrocutar a la gente.", //lo demás son respuestas u opciones
        "Viento, el lobo sopló y sopló para derribarles la casa...",
        "Fuego, te gustaría quemar todo a tu alrededor, verdad? (llamando al 112).",
        "Agua, enserio eres más de agua que de Cocacola?",
    ), new Array("checkbox", 2)//la primera posicion del array corresponde al tipo de form y la segunda al numero de respuestas aceptadas
    ));
    evaluacion.set("pregunta_4", new Array("", "Zenitsu", "Inosuke", "Rengoku-Tanjiro-Nezuko", "Tomioka-Kanao"));

    preguntas.set("pregunta_5", new Array(new Array("¿Qué es más importante para ti?",  //la primera posicion del array corresponde a la pregunta
        "La familia es lo primero, nunca te abandona, como Rexona.", //lo demás son respuestas u opciones
        "Los amigos, porque son la familia que escoges y no te juzgan.",
        "Yo mismo/a, al final solo puedes confiar en ti, sadboy/girl.",
    ), new Array("radio", 1)//la primera posicion del array corresponde al tipo de form y la segunda al numero de respuestas aceptadas
    ));
    evaluacion.set("pregunta_5", new Array("", "Tanjiro-Nezuko-Zenitsu", "Rengoku-Inosuke", "Kanao-Tomioka"));
    preguntas.set("pregunta_6", new Array(new Array("¿Cuál es tu pecado capital? (usa Control)",  //la primera posicion del array corresponde a la pregunta
        "Ira", //lo demás son respuestas u opciones
        "Codicia",
        "Pereza",
        "Orgullo",
        "Lujuria",
        "Envidia",
        "Gula"
    ), new Array("select", 2)//la primera posicion del array corresponde al tipo de form y la segunda al numero de respuestas aceptadas
    ));
    evaluacion.set("pregunta_6", new Array("", "Tanjiro-Kanao", "Tanjiro", "Zenitsu-Nezuko", "Inosuke", "Zenitsu", "Tomioka", "Rengoku"));

    preguntas.set("pregunta_7", new Array(new Array("¿Cuántos hermanos tienes? (Elige la opción más aproximada).",  //la primera posicion del array corresponde a la pregunta
        1, //lo demás son respuestas u opciones
        2,
        3,
        4
    ), new Array("range", 1)//la primera posicion del array corresponde al tipo de form y la segunda al numero de respuestas aceptadas
    ));
    evaluacion.set("pregunta_7", new Array("", "0 hermanos/Inosuke-Kanao-Tomioka", "1 hermano/Zenitsu-Rengoku", "2 hermanos/", "+ de 2 hermanos/Nezuko-Tanjiro"));


    preguntas.set("pregunta_8", new Array(new Array("¿Si un amigo se tropieza y se cae, que haces?",  //la primera posicion del array corresponde a la pregunta
        "Me rio muchisimo y luego, como buen amigo, le ayudo.", //lo demás son respuestas u opciones
        "Corro a ayudarle inmediatamente.",
        "Miro insensible, le ignoro y sigo con lo mio.",
        "Le ayudo primero y luego me rio con el de la situación",
        "Te desesperas, te pones histerico y llamas al 112.",
    ), new Array("checkbox", 2)//la primera posicion del array corresponde al tipo de form y la segunda al numero de respuestas aceptadas
    ));
    evaluacion.set("pregunta_8", new Array("", "Inosuke", "Tanjiro-Nezuko", "Kanao-Tomioka", "Rengoku", "Zenitsu"));

    preguntas.set("pregunta_9", new Array(new Array("¿Cuál es tu signo del horóscopo? ",  //la primera posicion del array corresponde a la pregunta
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
    evaluacion.set("pregunta_9", new Array("", "", "Inosuke-Kanao-Rengoku", "", "Tanjiro", "", "Zenitsu", "", "", "", "Nezuko", "Tomioka", ""));

    preguntas.set("pregunta_10", new Array(new Array("En una fiesta eres ...",  //la primera posicion del array corresponde a la pregunta
        "Muy sociable, me relaciono con los demás.", //lo demás son respuestas u opciones
        "Soy reservado y me suelo quedar en una esquina con mi cubata.",
        "¡Yo soy la fiesta!",
        "Qué fiesta ni que fiesta?, me quedo en casa con el batín.",
    ), new Array("radio", 1)//la primera posicion del array corresponde al tipo de form y la segunda al numero de respuestas aceptadas
    ));
    evaluacion.set("pregunta_10", new Array("", "Tanjiro-Rengoku", "Nezuko", "Tomioka-Inosuke-Zenitsu", "Kanao-Tomioka"));


    preguntas.set("pregunta_11", new Array(new Array("En una relación amorosa sueles ser ...",  //la primera posicion del array corresponde a la pregunta
        "Tímido, me pongo nervioso cuando estoy a su lado.", //lo demás son respuestas u opciones
        "Soy yo mismo, no tengo problemas en mostrarme como soy.",
        "Muy pesado y siempre atento por si la otra persona necesita algo.",
        "Me hago el duro y el frío porque soy bastante estupido/a, pero estoy para lo que necesite.",
        "Soy UNIsexual, no tengo relaciones amorosas :(",
    ), new Array("radio", 1)//la primera posicion del array corresponde al tipo de form y la segunda al numero de respuestas aceptadas
    ));
    evaluacion.set("pregunta_11", new Array("", "Kanao", "Rengoku-Tanjiro-Nezuko", "Zenitsu", "Tomioka", "Inosuke"));

    preguntas.set("pregunta_12", new Array(new Array("¿Cómo de inteligente crees que eres? (Elige la opción más aproximada).",  //la primera posicion del array corresponde a la pregunta
        1, //lo demás son respuestas u opciones
        2,
        3,
        4,
        5
    ), new Array("range", 1)//la primera posicion del array corresponde al tipo de form y la segunda al numero de respuestas aceptadas
    ));
    evaluacion.set("pregunta_12", new Array("", "Soy un pedazo de mongolo", "Soy un poco lerdo/Inosuke-Zenitsu", "Me considero en el promedio/Nezuko-Rengoku", "Soy más listo que la media/Tanjiro-Kanao", "Soy el más listo/Tomioka"));

    preguntas.set("pregunta_13", new Array(new Array("¿Cuál es tu asignatura favorita?",  //la primera posicion del array corresponde a la pregunta
        "Inglés", //lo demás son respuestas u opciones
        "Matemáticas",
        "Lengua",
        "Educación Física",
        "El recreo",
        "Historia",
    ), new Array("select", 1)//la primera posicion del array corresponde al tipo de form y la segunda al numero de respuestas aceptadas
    ));
    evaluacion.set("pregunta_13", new Array("", "Nezuko", "Kanao", "Tanjiro", "Inosuke-Rengoku", "Zenitsu", "Tomioka"));
}
function comprobar() {
    let key = "pregunta_" + cont;
    console.log("comprobando " + key)
    var eleccion = new Set(); //para una vez elegidas las respuestas, pasarlas a la función evaluar.
    let msg = "";
    if (preguntas.get(key)[1][1] != 1) {
        msg = "Debes elegir entre 1 y " + preguntas.get(key)[1][1] + " opciones. ";
    } else {
        msg = "Debes elegir una opción válida."
    }
    if (preguntas.get(key)[1][0] == "radio") {
        let numerorespuesta = 1;
        let checkeadas = 0;
        while (preguntas.get(key)[0][numerorespuesta] != null) {
            let radio = document.getElementById("radio" + key + "_" + numerorespuesta);
            console.log(radio.id);
            if (radio.checked) {
                checkeadas++;
                eleccion.add(radio.value);

            }
            numerorespuesta++;
            console.log("checkeadas " + checkeadas);
            console.log(" limite " + preguntas.get(key)[1][1]);
        }
        if (checkeadas <= preguntas.get(key)[1][1] && checkeadas >= 1) {
            evaluar(eleccion);
            crearpregunta();
        } else {
            swal("Mal", msg, "error");

        }
    }
    if (preguntas.get(key)[1][0] == "checkbox") {
        console.log("checkbox");
        let numerorespuesta = 1;
        let checkeadas = 0;
        while (preguntas.get(key)[0][numerorespuesta] != null) {
            let checkbox = document.getElementById("checkbox_" + key + "_" + numerorespuesta);
            console.log(checkbox);
            numerorespuesta++;
            if (checkbox.checked) {
                checkeadas++;
                console.log(checkbox.value);
                eleccion.add(checkbox.value);
            }
        }
        console.log("checkeadas " + checkeadas);
        console.log(" limite " + preguntas.get(key)[1][1]);
        if (checkeadas <= preguntas.get(key)[1][1] && checkeadas >= 1) {
            console.log("bien");
            evaluar(eleccion);
            crearpregunta();
        } else {
            swal("Mal", msg, "error");
        }
    }
    if (preguntas.get(key)[1][0] == "range") {
        let inputrange = document.getElementById("range" + key)
        console.log("->>> " + inputrange.value);
        let trozos = evaluacion.get(key)[inputrange.value].split("/");
        console.log(trozos[1]);
        eleccion.add(trozos[1]);

        evaluar(eleccion);
        crearpregunta();

    }
    if (preguntas.get(key)[1][0] == "select") {
        /*  ESTA MANERA SERVÍA PARA CUANDO EL SELECT RECOGÍA UN ÚNICO DATO, PERO COMO HE PUESTO QUE PUEDEN HABER SELECTS EN LOS QUE SE RECOJAN
        MÁS DE UN DATO, CON MULTIPLE, HE ENCONTRADO UNA NUEVA MANERA DE REALIZARLO
        let select = document.getElementById("select" + key);
        let valor = select.options[select.selectedIndex].value;
        console.log ("VALORE SELECT -> "+valor);
        */
        let select = document.getElementById("select" + key);
        var valores = "";
        let checkeadas = 0;
        for (var i = 0; i < select.options.length; i++) {
            if (select.options[i].selected == true) {
                checkeadas++;
                valores += select.options[i].value + "-";
            }
        }
        if (valores == "Opciones-" || checkeadas > preguntas.get(key)[1][1]) {
            swal("Mal", msg, "error");
        } else {
            console.log(" -> " + valores);

            eleccion.add(valores);
            evaluar(eleccion);
            crearpregunta();
        }
    }

}
function start() {
    cont = 0;
    crearpregunta();
}
function evaluar(eleccion) {
    console.log("evaluando....");
    console.log(eleccion);
    for (let elemento of eleccion) {
        console.log(elemento);
        if (elemento.includes("-")) {
            let trozos = elemento.split("-");
            for (let i = 0; i < trozos.length; i++) {
                console.log(trozos);
                if (personajes.has(trozos[i]) == true) {
                    personajes.set(trozos[i], personajes.get(trozos[i]) + 1);
                }
            }
        } else {
            if (personajes.has(elemento) == true) {

                personajes.set(elemento, personajes.get(elemento) + 1);
            }
        }
    }
    console.log(personajes);

}
function ocultar() {
    console.log("OCULTANDO");
    console.log("CONTADOR - >" + cont);
    let inicio = document.getElementById("inicio");
    console.log(inicio.id);
    if (inicio.style.display != "none") {
        inicio.style.display = "none";
    }
    let pregunta = document.getElementById("pregunta_" + cont);
    if (pregunta) {
        //pregunta.style.display = "none";
        let body = document.getElementById("body");
        body.removeChild(pregunta);
    }
}
function crearpregunta() {
    let kimetsu = document.getElementById("kimetsu");
    kimetsu.style.display = "none";
    let quiz = document.getElementById("quiz");
    quiz.style.display = "none";
    ocultar();//debería destruir la pregunta y no solo ocultarla
    console.log("ola")
    cont++;
    if (cont <= limite) {
        console.log(cont);
        let key = "pregunta_" + cont;
        let body = document.getElementById("body");
        let divpreg = document.createElement('div');
        divpreg.setAttribute("class", "preguntas");
        divpreg.setAttribute("id", key);
        let divcont = document.createElement('div');
        divcont.setAttribute("class", "container");
        let h3pregunta = document.createElement('h3');
        let textopregunta = preguntas.get(key)[0][0];
        if (preguntas.get(key)[1][1] == 1) {
            textopregunta += " (1 opción).";
        }
        else {
            textopregunta += " (" + preguntas.get(key)[1][1] + " opciones).";
        }
        let pregunta = document.createTextNode(textopregunta);

        h3pregunta.appendChild(pregunta);
        let img = document.createElement('img');
        img.setAttribute("src", "../img/" + key + ".jpg");
        let form = document.createElement('form');
        let divrespuestas = document.createElement("div");
        divrespuestas.setAttribute("class", "respuestas");
        let select;
        if (preguntas.get(key)[1][0] == "select") {
            select = document.createElement("select");
            select.setAttribute("name", "menu");
            select.setAttribute("class", "select");
            select.setAttribute("id", "select" + key);
            if (preguntas.get(key)[1][1] > 1) {
                select.setAttribute("multiple", "multiple");
            }
            let option = document.createElement("option");
            option.setAttribute("value", "Opciones");
            option.setAttribute("selected", "selected");

            let resp = document.createTextNode("Opciones");
            option.appendChild(resp);
            select.appendChild(option);
            divrespuestas.appendChild(select);

        }
        let inputrange, datalist;
        if (preguntas.get(key)[1][0] == "range") {
            let label = document.createElement("label");
            label.setAttribute("id", "label" + key);
            let trozos = evaluacion.get(key)[preguntas.get(key)[0].length - 1].split("/");
            label.innerHTML = trozos[0];
            //como siempre me sale el punto a la derecha del todo, pues le pongo de forma predeterminada, ese string
            divrespuestas.appendChild(label);
            console.log("range");
            inputrange = document.createElement("input");
            inputrange.setAttribute("id", "range" + key);
            inputrange.setAttribute("type", "range");
            inputrange.setAttribute("min", 1);
            inputrange.style.width = "100%";
            inputrange.setAttribute("class", "range");

            console.log("maximo -> " + preguntas.get(key)[0].length)
            inputrange.setAttribute("max", preguntas.get(key)[0].length - 1);
            inputrange.setAttribute("list", "lista-rango");
            inputrange.addEventListener("input", cambiarlabelrange);


            datalist = document.createElement("datalist");
            datalist.setAttribute("id", "lista-rango");
        }
        let numerorespuesta = 1;

        while (preguntas.get(key)[0][numerorespuesta] != null) {
            if (preguntas.get(key)[1][0] == "checkbox") {
                let label = document.createElement("label");
                let input = document.createElement("input");
                input.setAttribute("type", "checkbox");
                input.setAttribute("name", "checkbox");
                input.setAttribute("id", "checkbox_" + key + "_" + numerorespuesta);
                input.setAttribute("value", evaluacion.get(key)[numerorespuesta]);
                label.appendChild(input);
                let resp = document.createTextNode(preguntas.get(key)[0][numerorespuesta]);
                let span = document.createElement("span");

                span.appendChild(resp);
                label.appendChild(span);
                divrespuestas.appendChild(label);
            }
            if (preguntas.get(key)[1][0] == "range") {
                let option = document.createElement("option");
                option.setAttribute("value", numerorespuesta);
                datalist.appendChild(option);
            }

            if (preguntas.get(key)[1][0] == "select") {
                let option = document.createElement("option");
                option.setAttribute("value", evaluacion.get(key)[numerorespuesta]);
                let resp = document.createTextNode(preguntas.get(key)[0][numerorespuesta]);
                option.appendChild(resp);
                select.appendChild(option);
            }
            if (preguntas.get(key)[1][0] == "radio") {
                let label = document.createElement("label");
                let input = document.createElement("input");
                input.setAttribute("type", "radio");
                input.setAttribute("name", "radio");
                console.log(evaluacion.get(key)[numerorespuesta]);
                input.setAttribute("value", evaluacion.get(key)[numerorespuesta]);
                input.setAttribute("id", "radio" + key + "_" + numerorespuesta);
                label.appendChild(input);
                let resp = document.createTextNode(preguntas.get(key)[0][numerorespuesta]);
                let span = document.createElement("span");
                span.appendChild(resp);
                label.appendChild(span);
                divrespuestas.appendChild(label);
            }


            numerorespuesta++;

        }
        if (preguntas.get(key)[1][0] == "range") {
            inputrange.appendChild(datalist);
            divrespuestas.appendChild(inputrange);
        }


        form.appendChild(divrespuestas);
        let h5boton = document.createElement("h5");
        let boton = document.createElement("button");
        boton.setAttribute("type", "button");
        boton.setAttribute("id", "boton_pregunta_" + cont);
        boton.addEventListener("click", comprobar);
        boton.setAttribute("class", "btn btn-lg btn-outline-light");
        boton.appendChild(document.createTextNode("Siguiente"));
        h5boton.appendChild(boton);
        form.appendChild(h5boton);
        divcont.appendChild(h3pregunta);
        divcont.appendChild(img);
        divcont.appendChild(form);
        divpreg.appendChild(divcont);
        body.appendChild(divpreg);
    }
    else {
        resultado();
    }
}

function resultado() {
    console.log("resultado");
    let maximo = 0;
    let character = "";
    for (var [key, value] of personajes) {
        console.log(key + " = " + value);
        if (value > maximo) {
            maximo = value;
            character = key;
        }
    }
    console.log("El personaje es " + character);
    let resultado = document.getElementById("resultado");
    resultado.style.display = "block";
    let personajeresultado = document.getElementById("personajeresultado");
    personajeresultado.innerHTML = character;
    let imgpersonajeresultado = document.getElementById("imgpersonajeresultado");
    imgpersonajeresultado.setAttribute("src", "../img/" + character + ".jpg");
    let ppersonajeresultado = document.getElementById("ppersonajeresultado");
    ppersonajeresultado.innerHTML = "BLA BLA BLA"

}
function cambiarlabelrange() {
    console.log("range " + this.value);

    let key = "pregunta_" + cont;
    let label = document.getElementById("label" + key)
    console.log(label);

    let trozos = evaluacion.get(key)[this.value].split("/");
    let texto = trozos[0];
    console.log("testo " + texto);
    label.innerHTML = texto;



}
function volverinicio() {
    let resultado = document.getElementById("resultado");
    resultado.style.display = "none";
    let inicio = document.getElementById("inicio");
    inicio.style.display = "block";
    cont = 0;
    resetpersonajes();
}
