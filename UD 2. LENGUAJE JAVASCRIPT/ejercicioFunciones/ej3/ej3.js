/*function ej3(){
    
    var opcion1 = document.getElementById("opcion1");
    var opcion2 = document.getElementById("opcion2");
    var opcion3 = document.getElementById("opcion3");

    if(opcion1.checked == true){
        alert("Se ha seleccionado la opción 1");
    }else if(opcion2.checked == true){
        alert("Se ha seleccionado la opción 2");
    }else if(opcion3.checked == true){
        alert("Se ha seleccionado la opción 3");
    }
    
}*/

function ejemplo2(){
    
    let opcion1 = document.getElementById("opcion1");
    let opcion2 = document.getElementById("opcion2");
    let opcion3 = document.getElementById("opcion3");
    let mensaje = (opcion1.checked == true) ? "Se ha seleccionado la opción 1" :
    (opcion2.checked == true) ? "Se ha seleccionado la opción 2" :
    "Se ha seleccionado la opción 3" ;

    alert(mensaje)
}