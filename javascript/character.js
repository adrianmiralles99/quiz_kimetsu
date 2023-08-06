export default class character {
    nombre ="";
    rutaimagen = "";
    descripcion = "";
    sonido = "../audio/";
    votos;
    constructor(nombre){
        this.nombre = nombre;
        this.sonido += nombre +".mp3";
        this.rutaimagen = "../img/"+nombre+".jpg";
        this.votos = 0;
    }
    getNombre =() => this.nombre;

    setDescripcion (descripcion){
        this.descripcion = descripcion;
    }
    getDescripcion =() => this.descripcion;
    addVoto(){
        this.votos ++;
    }
    resetVoto = () => this.votos = 0;
    getVotos =() => this.votos;
    getImagen =() => this.rutaimagen;
    getSonido =() => this.sonido;
  
    
}