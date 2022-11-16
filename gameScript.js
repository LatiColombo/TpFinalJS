let imageOne= document.querySelector('#img1');
let imageTwo= document.querySelector('#img2');
let imageThree= document.querySelector('#img3');
let dropboxOne= document.querySelector(dropbox1);
let dropboxTwo= document.querySelector(dropbox2);
let dropboxThree= document.querySelector(dropbox3);

const saveData1=(event)=>{
    event.dataTransfer.setData("Text","../assets/imagenes/rompe1.png")
}

const saveData2=(event)=>{
    event.dataTransfer.setData("Text","../assets/imagenes/rompe2.png")
}

const saveData3=(event)=>{
    event.dataTransfer.setData("Text","../assets/imagenes/rompe3.png")
}

const preventAction=(event)=>{
    event.preventDefault();
}

// obtener info y soltarlo
const dropData = (event)=>{

   let infoImage= event.dataTransfer.getData("Text");
   dropboxOne=`<img src="${infoImage}"/>`
   dropboxTwo=`<img src="${infoImage}"/>`
   dropboxThree=`<img src="${infoImage}"/>`

//borro el dato que guarde para que pueda volver a utilizar ese tipo de dato en otra cosa que necesite
    event.dataTransfer.clearData("Text")
}
function reboot() {
    window.location.reload();
}
