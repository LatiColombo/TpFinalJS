//Con este arreglo sabremos qué divs están ocupados o no.
let array =  ["", "", ""];

// función para que deje soltar el elemento
function preventAction(ev) {
    ev.preventDefault();
}

//Función que guarda lo que agarré con el mouse
function saveData(ev) {
    console.log(ev)
    ev.dataTransfer.setData("text", ev.target.id);
}


function dropData(ev) {
    //Tomo el nombre del id del div que puede ser 0, o 1 o 2. Si el arreglo en esa posición está vacío entonces puedo
    // soltar ahí la imagen
    if(array[parseInt(ev.target.id)]==""){
        //con getData obtengo los datos arrastrados en el evento (ev) 
        var data = ev.dataTransfer.getData("text");
        //agrego al array el dato que traje (el id de la imagen arrastrada)
        array[parseInt(ev.target.id)] = data;
        console.log(data)
        //agrego el elemento arrastrado al elemento soltado
        ev.target.appendChild(document.getElementById(data));
    
    }

//borro el dato que guarde para que pueda volver a utilizar ese tipo de dato en otra cosa que necesite
    ev.dataTransfer.clearData("text")
}
function reboot() {
    window.location.reload();
}
