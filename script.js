// Registro

document.getElementById("formulario")
.addEventListener("submit", function(e){

    e.preventDefault();

    let nombre =
    document.getElementById("nombre").value;

    document.getElementById("mensaje").innerHTML =
    "✅ Bienvenido " + nombre;

});

// Pedido

function calcularTotal(){

    let precio =
    parseFloat(
        document.getElementById("platillo").value
    );

    let cantidad =
    parseInt(
        document.getElementById("cantidad").value
    );

    let total = precio * cantidad;

    document.getElementById("resultado").innerHTML =
    "💰 Total a pagar: $" +
    total.toFixed(2);

}

// Reserva

function reservarMesa(){

    let nombre =
    document.getElementById("nombreReserva").value;

    document.getElementById("mensajeReserva").innerHTML =
    "🍽️ Mesa reservada para " + nombre;

}

// Reloj

setInterval(function(){

    let hora = new Date();

    document.getElementById("reloj").innerHTML =
    "🕒 " + hora.toLocaleTimeString();

},1000);