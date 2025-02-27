let pe = document.getElementsByClassName("pedir");

for(let x = 0; x < pe.length; x++){
  pe[x].addEventListener("click", abrirModal2)
}

function abrirModal2(){
  let modal = document.getElementById("modal2")
  modal.style.display = "flex"
  modal.addEventListener("click", opcionPulsada2)
}


function opcionPulsada2(event){
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






let nombre = document.getElementById("nombre")
let apellidos = document.getElementById("apellidos")
let edad = document.getElementById("edad")

let malNom
let maAp
let numMal = 0;
let AlertaCreada = false

function hayAlerta(x){
  AlertaCreada = x
}

let numeros = "0123456789"

function setMalNom(x){
  malNom = x
}

function setMalAp(x){
  maAp = x
}



function pruebaAcceso(x){
  for (let i = 0; i < x.length; i++) {
    for (let u = 0; u < numeros.length; u++) {
      if(x[i] == numeros[u]){
        numMal++
      }
    }
  }
}

let en = document.getElementsByClassName("enviar");

function escribirAlerta(){
    let formu = document.getElementById("formulario")
    let p = document.createElement("p")
    p.setAttribute("class", "text-danger mt-3 mal")
    let texto = document.createTextNode('Error: No se aceptan numeros en los campos " Nombre" o "Apellidos" ni numeros por debajo de cero en "Edad"')
    p.appendChild(texto)
    formu.appendChild(p)
}

function borrarAlerta(){
  hayAlerta(false)
  let formu = document.getElementById("formulario")
  let parrafo = document.getElementsByClassName("mal")
  formu.removeChild(parrafo[0])
}

for(let x = 0; x < en.length; x++){
en[x].addEventListener("click", abrirModal)
}

function abrirModal(){
  pruebaAcceso(nombre.value)
  pruebaAcceso(apellidos.value)
  console.log(edad.value)
  if(numMal > 0 || parseInt(edad.value) < 0){
    escribirAlerta()
    hayAlerta(true)
    console.log("hay un dato erroneo")
  }
  else{
    console
    if(AlertaCreada == true){
      borrarAlerta()
    }
    let modal = document.getElementById("modal2")
    modal.style.display = "flex"
    modal.addEventListener("click", opcionPulsada)
  }
  numMal = 0
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





  


