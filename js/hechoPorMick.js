let pe = document.getElementsByClassName("pedir");
  /*
for(let x = 0; x < pe.length; x++){
  pe[x].addEventListener("click", function() {
    document.getElementById("modal").style.display = "flex";
})
}
document.querySelector(".close").addEventListener("click", function() {
  document.getElementById("modal").style.display = "none";
});
*/




//botonPulsado.addEventListener("click", enviarDatos)
for(let x = 0; x < pe.length; x++){
  pe[x].addEventListener("click", abrirModal)
}

function abrirModal(){
  let modal = document.getElementById("modal2")
  modal.style.display = "flex"
  modal.addEventListener("click", opcionPulsada)
}


function opcionPulsada(event){
  let modal = document.getElementById("modal2")
  let nodoCLick
  if(event){
    nodoCLick = event.target
    if(nodoCLick.id == "aceptar"){
      modal.style.display = "none"
      document.getElementById("modal").style.display = "flex";
      document.querySelector(".close").addEventListener("click", function() {
      document.getElementById("modal").style.display = "none";
      });
    }
    else{
      modal.style.display = "none"
    }
  }
}










let en = document.getElementsByClassName("enviar");


//botonPulsado.addEventListener("click", enviarDatos)
for(let x = 0; x < en.length; x++){
en[x].addEventListener("click", abrirModal)
}

function abrirModal(){
  let modal = document.getElementById("modal2")
  modal.style.display = "flex"
  modal.addEventListener("click", opcionPulsada)
}


function opcionPulsada(event){
  let modal = document.getElementById("modal2")
  let nodoCLick
  if(event){
    nodoCLick = event.target
    if(nodoCLick.id == "aceptar"){
      modal.style.display = "none"
      document.getElementById("modal").style.display = "flex";
      document.querySelector(".close").addEventListener("click", function() {
      document.getElementById("modal").style.display = "none";
      });
    }
    else{
      modal.style.display = "none"
    }
  }
}

/*
      for(let x = 0; x < en.length; x++){
        en[x].addEventListener("click", function() {
          document.getElementById("modal").style.display = "flex";
      })
      }
*/      




  


