class Jueguitos{
    constructor (nombre, cantidad){
        this.nombre=nombre
        this.cantidad=cantidad
    }
}

let funciona= true
let jue=[]
while (funciona) {
    let opciones= Number (prompt("seleccione una opcion 1) agregar juego 0) salir"))
    
        switch (opciones) {
            case 1:
                let nom = prompt("Ingrese Nombre del juego");
                let cant= parseInt (prompt("ingrese la cantidad"))
                if (nom=="fifa"||nom=="pes"||nom=="uncharted"||nom=="dishonored") {
                    jueguitos= new Jueguitos(nom, cant);
                    agregarJuego();
                    totalJuego();

                    
                }
                 else {
                    alert("por el momento no tenemos ese juego");
                }
     
                break;
       
            case 0:
                alert("gracias por elegirnos")
                funciona= false
                break
           
            default:
                alert("opcion no valida")
            }
        
}
function agregarJuego(){
    jue.push(jueguitos)
    console.log(jue);
}
function totalJuego(){
    console.log(`Tu carrito tiene ${jue.length} juegos`);
}