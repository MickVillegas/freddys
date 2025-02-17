let pe = document.getElementsByClassName("pedir");
  
for(let x = 0; x < pe.length; x++){
  pe[x].addEventListener("click", function() {
    document.getElementById("modal").style.display = "flex";
})
}
document.querySelector(".close").addEventListener("click", function() {
  document.getElementById("modal").style.display = "none";
});

let en = document.getElementsByClassName("enviar");
  
for(let x = 0; x < en.length; x++){
  en[x].addEventListener("click", function() {
    document.getElementById("modal").style.display = "flex";
})
}



document.querySelector(".close").addEventListener("click", function() {
  document.getElementById("modal").style.display = "none";
});