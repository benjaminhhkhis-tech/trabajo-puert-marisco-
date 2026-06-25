const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(e){

e.preventDefault();

let nombre = document.getElementById("nombre").value;
let correo = document.getElementById("correo").value;

if(nombre === "" || correo === ""){
alert("Complete todos los campos");
return;
}

localStorage.setItem("cliente", nombre);

document.getElementById("mensaje").innerHTML =
"✅ Gracias por registrarte, " + nombre;

formulario.reset();

});

function visitas(){

let total = localStorage.getItem("visitas");

if(total == null){
total = 1;
}else{
total++;
}

localStorage.setItem("visitas", total);

document.getElementById("visitas").innerHTML =
"Visitas al sitio: " + total;

}

visitas();

setInterval(function(){

let hora = new Date();

document.getElementById("reloj").innerHTML =
"Hora actual: " + hora.toLocaleTimeString();

},1000);

