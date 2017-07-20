function Pasajero(nombre, apellido, DNI){
    this.nombre = nombre;
    this.apellido = apellido;
    this.DNI = DNI;
    this.asiento = function(){
        return true;
    }

}



function reservar(){

    var nombre = document.getElementById("txtNombre").value;
    var apellido = document.getElementById("txtApellido").value;
    var DNI = document.getElementById("txtDNI").value;

    var pasajeroObjt = new Pasajero(nombre, apellido, DNI);

    alert("Nombre: " + pasajeroObjt.nombre);

}

function mostrar(){
    var tdArreglo = document.getElementsByTagName("td");


    //var divDatos = document.getElementById("tablaContenido");
  /*  for(var i=0; i<tdArreglo.length; i++){
        if(pasajeroObjt.asiento()==true){
            //nombre.value = pasajeroObjt.nombre;
            alert("entreeee");
            
        }
    }*/
    alert("clICK!!!!");
}


function buscar(){
    var DNIbusqueda = document.getElementById("dniBusqueda");

}

var arrTD = document.getElementsByTagName("td").innerHTML;
console.log("arreglo: "+arrTD);

function cancelar(){}
function listar(){}
