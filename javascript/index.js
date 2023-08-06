import clase_cuestionario from "./cuestionario.js";//importando la clase bombas
var cuestionario = new clase_cuestionario();
import clase_personajes from "./character.js";//importando la clase bombas

var preguntas = new Map();
var evaluacion = new Map();
var personajesMap = new Map();

var cont;
var limite;

window.onload = function () {
    evaluacion = cuestionario.getMapEvaluaciones();
    preguntas = cuestionario.getMapPreguntas();
    establecerpersonajes();
    cont = 0; 
    let botonquiz = document.getElementById("botonquiz");
    botonquiz.addEventListener("click", seccionquiz);
    let botonkimetsu = document.getElementById("botonkimetsu");
    botonkimetsu.addEventListener("click", seccionkimetsu);
    limite = preguntas.size;
    let start = document.getElementById("start");
    start.addEventListener("click", crearpregunta);
    let volver = document.getElementById("volveraempezar");
    volver.addEventListener("click", volverinicio);
}
var seccionquiz = () =>{//arrow function 
    let kimetsu = document.getElementById("kimetsu");
    kimetsu.style.display = "none";
    let quiz = document.getElementById("quiz");
    quiz.style.display = "block";
    let preguntaaeliminar = "pregunta_" + cont; //nos guardamos la pregunta por la que iba el cuestionario
    volverinicio();
    let body = document.getElementById("body");
    let pregunta = document.getElementById(preguntaaeliminar);
    if (pregunta) {//si existe esa pregunta, la eliminamos y volvemos a la pantalla de inicio.
        body.removeChild(pregunta);
    }
};
var seccionkimetsu = () => {
    let quiz = document.getElementById("quiz");
    quiz.style.display = "none";
    let kimetsu = document.getElementById("kimetsu");
    kimetsu.style.display = "block";
    let preguntaaeliminar = "pregunta_" + cont;//nos guardamos la pregunta por la que iba el cuestionario
    volverinicio();
    let body = document.getElementById("body");
    let pregunta = document.getElementById(preguntaaeliminar);
    if (pregunta) {//si existe esa pregunta, la eliminamos y volvemos a la pantalla de inicio.
        body.removeChild(pregunta);
    }
};
var establecerpersonajes = () => {//establecemos tanto el nombre de los personajes como su descripción
    personajesMap.set("Tanjiro",new clase_personajes("Tanjiro"));
    personajesMap.get("Tanjiro").setDescripcion("Tanjiro es amable por naturaleza, con un gran sentido de la justicia, otros personajes resaltan la expresión particular de sus ojos, los cuales los definen como una mirada amable y llena de nostalgia. Exhibe una gran determinación y no se rendirá una vez que tenga una meta que alcanzar.");
    personajesMap.set("Nezuko",new clase_personajes("Nezuko"));
    personajesMap.get("Nezuko").setDescripcion("Nezuko es muy cariñosa y protectora con otros humanos que ve como miembros de su familia debido a la influencia de Urokodaki mientras estuvo dormida durante dos años. Ella también es bastante descarada, y no parece temer pelear; ella guarda ferozmente a su hermano, así como a sus aliados.");
    personajesMap.set("Inosuke",new clase_personajes("Inosuke"));
    personajesMap.get("Inosuke").setDescripcion("Inosuke es extremadamente temperamental, impulsivo, poco paciente y lleno de un orgullo desmesurado. Su orgullo es tal que incluso está dispuesto a pelear contra oponentes que son técnicamente más fuertes que él.");
    personajesMap.set("Zenitsu",new clase_personajes("Zenitsu"));
    personajesMap.get("Zenitsu").setDescripcion("Por naturaleza, Zenitsu es cobarde. Siempre afirma que no tiene mucho tiempo de vida debido al peligroso trabajo de ser un Cazador de demonios. También es un poco mujeriego y le gusta flirtear con las chicas que él piensa que son lindas. En los momentos críticos se le va la cobardía.(pq se duerme XD).");
    personajesMap.set("Tomioka",new clase_personajes("Tomioka"));
    personajesMap.get("Tomioka").setDescripcion("Giyu siempre tiene una expresión seria en su rostro y tiene una personalidad reservada y un fuerte sentido de la justicia. No dice mucho y tiene problemas para interactuar con los demás, por lo que generalmente se mantiene a distancia.");
    personajesMap.set("Kanao",new clase_personajes("Kanao"));
    personajesMap.get("Kanao").setDescripcion("Kanao no tenía emociones, era muy callada y reservada, y no podía pensar de forma independiente debido a su dura educación. El estado emocional de Kanao empezó a cambiar cuando conoció a Tanjiro Kamado, que la convenció de vivir su vida según su corazón. (TREMEBUNDA WAIFU).");
    personajesMap.set("Rengoku",new clase_personajes("Rengoku"));
    personajesMap.get("Rengoku").setDescripcion("Kyojuro está muy entusiasmado con respecto a sus deberes como pilar, y a menudo se lo muestra alegremente excéntrico. Su más importante su creencia de que aquellos que nacieron fuertes tienen el deber de proteger a los débiles. Le encanta la comida y es muy enérgico.");    
    personajesMap.set("Tokito",new clase_personajes("Tokito"));
    personajesMap.get("Tokito").setDescripcion("Muichiro da la impresión inicial de ser un individuo con la mente distraída en otros pensamientos que no le presta mucha atención a su alrededor.Obtuso e impasible, Muichiro prefiere muchas veces hacer las cosas por su propia cuenta. ");
    personajesMap.set("Mitsuri",new clase_personajes("Mitsuri"));
    personajesMap.get("Mitsuri").setDescripcion("Mitsuri es una persona muy emocional y apasionada que constantemente felicita a la gente en su cabeza. Aunque es bastante tímida y se pone fácilmente nerviosa, Mitsuri siempre es amable con los demás y también puede parecer algo infantil a veces.");
    personajesMap.set("Iguro",new clase_personajes("Iguro"));
    personajesMap.get("Iguro").setDescripcion("Obanai es muy apegado con respecto a cumplir las reglas, por lo que es sumamente estricto y no tiene compasión por quienes las incumplen. A pesar de su faceta despiadada, es evidente que siente una atracción por su compañera Pilar, Mitsuri Kanroji. Obanai posee una inmensa sensación de odio a sí mismo por el pasado de su clan.");
};
var resetpersonajes= () => {//reseteamos todos los votos a cero, para empezar un nuevo quiz.
    for (var [key, value] of personajesMap) {
        personajesMap.get(key).resetVoto();
    }
    //verVotos();
};

function comprobar() {
    let key = "pregunta_" + cont;
    let numerorespuestas = (preguntas.get(key)[0].length)-1;
    var eleccion = new Set(); //para una vez elegidas las respuestas, pasarlas a la función evaluar.
    let msg = "";//esto es para el mensaje del alert bonito
    if (preguntas.get(key)[1][1] != 1) {
        msg = "Debes elegir entre 1 y " + preguntas.get(key)[1][1] + " opciones. ";
    } else {
        msg = "Debes elegir una opción válida."
    }
    if (preguntas.get(key)[1][0] == "radio") {
        let checkeadas = 0;
        for (let i = 1; i <=numerorespuestas; i++){
            let radio = document.getElementById("radio" + key + "_" + i);
            if (radio.checked) {
                checkeadas++;
                eleccion.add(radio.value);

            }  
        }
        if (checkeadas <= preguntas.get(key)[1][1] && checkeadas >= 1) {
            evaluar(eleccion);
            crearpregunta();
        } else {
            swal("Mal", msg, "error");

        }
    }
    if (preguntas.get(key)[1][0] == "checkbox") {
        let checkeadas = 0;
        for (let i = 1; i <=numerorespuestas; i++){
            let checkbox = document.getElementById("checkbox_" + key + "_" + i);
            if (checkbox.checked) {
                checkeadas++;
                eleccion.add(checkbox.value);
            }
        }
        if (checkeadas <= preguntas.get(key)[1][1] && checkeadas >= 1) {
            evaluar(eleccion);
            crearpregunta();
        } else {
            swal("Mal", msg, "error");
        }
    }
    if (preguntas.get(key)[1][0] == "range") {
        let inputrange = document.getElementById("range" + key)
        let trozos = evaluacion.get(key)[inputrange.value].split("/");
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
        for (let i = 0; i < select.options.length; i++) {
            if (select.options[i].selected == true) {
                checkeadas++;
                valores += select.options[i].value + "-";
            }
        }
        if (valores == "Opciones-" || checkeadas > preguntas.get(key)[1][1]) {
            swal("Mal", msg, "error");
        } else {

            eleccion.add(valores);
            evaluar(eleccion);
            crearpregunta();
        }
    }
}

var evaluar = (eleccion) =>{ //funcion arrow con cuerpo
                            //Esta función es para sumarle los votos a los personajes según el value o los values que haya en el set eleccion.
    for (let elemento of eleccion) {
        if (elemento.includes("-")) {
            let trozos = elemento.split("-");
            for (let i = 0; i < trozos.length; i++) {
                if (personajesMap.has(trozos[i]) == true) {//si el elemento existe, añadimos votos
                    personajesMap.get(trozos[i]).addVoto();
                }
            }
        } else {
            if (personajesMap.has(elemento) == true) {//si el elemento existe, añadimos votos
                personajesMap.get(elemento).addVoto();
            }
        }
    }
    //verVotos();
};
var ocultar = () => {
    let inicio = document.getElementById("inicio");
    if (inicio.style.display != "none") {
        inicio.style.display = "none";
    }
    let pregunta = document.getElementById("pregunta_" + cont);
    if (pregunta) {
        //pregunta.style.display = "none";
        let body = document.getElementById("body");
        body.removeChild(pregunta);
    }
};
function crearpregunta() {
    let kimetsu = document.getElementById("kimetsu");
    kimetsu.style.display = "none";
    let quiz = document.getElementById("quiz");
    quiz.style.display = "none";
    ocultar();//debería destruir la pregunta y no solo ocultarla
    cont++;
    if (cont <= limite) {
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
            inputrange = document.createElement("input");
            inputrange.setAttribute("id", "range" + key);
            inputrange.setAttribute("type", "range");
            inputrange.setAttribute("min", 1);
            inputrange.style.width = "100%";
            inputrange.setAttribute("class", "range");

            inputrange.setAttribute("max", preguntas.get(key)[0].length - 1);
            inputrange.setAttribute("list", "lista-rango");
            inputrange.addEventListener("input", cambiarlabelrange);


            datalist = document.createElement("datalist");
            datalist.setAttribute("id", "lista-rango");
        }
        let numerorespuestas = (preguntas.get(key)[0].length)-1;

        for (let i = 1; i <=numerorespuestas; i++){
            if (preguntas.get(key)[1][0] == "checkbox") {
                let label = document.createElement("label");
                let input = document.createElement("input");
                input.setAttribute("type", "checkbox");
                input.setAttribute("name", "checkbox");
                input.setAttribute("id", "checkbox_" + key + "_" + i);
                input.setAttribute("value", evaluacion.get(key)[i]);
                label.appendChild(input);
                let resp = document.createTextNode(preguntas.get(key)[0][i]);
                let span = document.createElement("span");
                span.appendChild(resp);
                label.appendChild(span);
                divrespuestas.appendChild(label);
            }
            if (preguntas.get(key)[1][0] == "range") {
                let option = document.createElement("option");
                option.setAttribute("value", i);
                datalist.appendChild(option);
            }
            if (preguntas.get(key)[1][0] == "select") {
                let option = document.createElement("option");
                option.setAttribute("value", evaluacion.get(key)[i]);
                let resp = document.createTextNode(preguntas.get(key)[0][i]);
                option.appendChild(resp);
                select.appendChild(option);
            }
            if (preguntas.get(key)[1][0] == "radio") {
                let label = document.createElement("label");
                let input = document.createElement("input");
                input.setAttribute("type", "radio");
                input.setAttribute("name", "radio");
                input.setAttribute("value", evaluacion.get(key)[i]);
                input.setAttribute("id", "radio" + key + "_" + i);
                label.appendChild(input);
                let resp = document.createTextNode(preguntas.get(key)[0][i]);
                let span = document.createElement("span");
                span.appendChild(resp);
                label.appendChild(span);
                divrespuestas.appendChild(label);
            }
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

var resultado = ()=> {
    let maximo = 0;
    let character = "";
    for (var [key, value] of personajesMap) {
        if (personajesMap.get(key).getVotos() > maximo) {//sacamos el primer personaje con más votos.
            maximo = personajesMap.get(key).getVotos();
            character = key;
        }
    }
    //verVotos();
    let resultado = document.getElementById("resultado");
    resultado.style.display = "block";
    let personajeresultado = document.getElementById("personajeresultado");
    personajeresultado.innerHTML = character;
    let imgpersonajeresultado = document.getElementById("imgpersonajeresultado");
    imgpersonajeresultado.setAttribute("src", personajesMap.get(character).getImagen());
    let ppersonajeresultado = document.getElementById("ppersonajeresultado");
    ppersonajeresultado.innerHTML = personajesMap.get(character).getDescripcion();
    sonidopersonaje (personajesMap.get(character).getSonido());// pasamos el campo ruta del objeto character.
    
};


var sonidopersonaje =  (ruta) =>{//Según el personaje, pues suena una frase característica suya
    let sonido = new Audio(ruta);
    sonido.play();
    sonido.volume = 0.70;
};
function verVotos(){
    for (var [key, value] of personajesMap) {
        console.log(key + " => " + personajesMap.get(key).getVotos());
    }
}
function  cambiarlabelrange () {//Esta función es para los tipos range, dado que el atributo list debería permitir añadir etiquetas al control,
                            // pero actualmente (noviembre de 2021) ningún navegador lo hace (no tiene soporte).
                            //he tenido que hacer esta función con javascript, para que vaya cambiando el label de arriba del range según la opción.
    let key = "pregunta_" + cont;
    let label = document.getElementById("label" + key);
    let trozos = evaluacion.get(key)[this.value].split("/");
    let texto = trozos[0];
    label.innerHTML = texto;
}
var  volverinicio = () => {
    let resultado = document.getElementById("resultado");
    resultado.style.display = "none";
    let inicio = document.getElementById("inicio");
    inicio.style.display = "block";
    cont = 0;
    resetpersonajes();
};
