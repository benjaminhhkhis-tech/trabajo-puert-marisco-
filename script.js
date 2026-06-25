// PROYECTO FINAL - RESTAURANTE PUERTO MARISCO

let nombreRestaurante = "Puerto Marisco";
let direccion = "San Miguel, El Salvador";
let telefono = "7777-7777";

console.log

console.log("         RESTAURANTE PUERTO MARISCO");
console.log

console.log("Dirección: " + direccion);
console.log("Teléfono: " + telefono);
console.log


let menu = [
    "Ceviche de camarón",
    "Pescado frito",
    "Sopa marinera",
    "Camarones al ajo",
    "Coctel de conchas",
    "Langosta",
    "Filete de pescado",
    "Arroz marinero"
];

console.log("MENÚ DEL RESTAURANTE");
for(let i = 0; i < menu.length; i++){
    console.log((i + 1) + ". " + menu[i]);
}

let cliente = "Juan Pérez";
let platillo = "Camarones al ajo";
let bebida = "Limonada";
let postre = "Flan";

let precioPlatillo = 12;
let precioBebida = 2;
let precioPostre = 3;

let subtotal = precioPlatillo + precioBebida + precioPostre;
let iva = subtotal * 0.13;
let total = subtotal + iva;

console.log

console.log("FACTURA");
console.log("Cliente: " + cliente);
console.log("Platillo: " + platillo);
console.log("Bebida: " + bebida);
console.log("Postre: " + postre);
console.log("Subtotal: $" + subtotal.toFixed(2));
console.log("IVA: $" + iva.toFixed(2));
console.log("Total: $" + total.toFixed(2));

if(total >= 15){
    console.log("Descuento disponible para la próxima compra.");
}else{
    console.log("Gracias por su compra.");
}

let mesasTotales = 25;
let mesasOcupadas = 18;
let mesasDisponibles = mesasTotales - mesasOcupadas;

console.log

console.log("CONTROL DE MESAS");
console.log("Mesas totales: " + mesasTotales);
console.log("Mesas ocupadas: " + mesasOcupadas);
console.log("Mesas disponibles: " + mesasDisponibles);

let empleados = [
    "Ana - Cajera",
    "Luis - Cocinero",
    "María - Mesera",
    "José - Mesero",
    "Pedro - Chef"
];

console.log

console.log("EMPLEADOS");

for(let i = 0; i < empleados.length; i++){
    console.log(empleados[i]);
}

let ventasLunes = 250;
let ventasMartes = 300;
let ventasMiercoles = 280;
let ventasJueves = 350;
let ventasViernes = 420;
let ventasSabado = 500;
let ventasDomingo = 450;

let ventasSemana = ventasLunes + ventasMartes + ventasMiercoles +
                   ventasJueves + ventasViernes + ventasSabado +
                   ventasDomingo;

console.log

console.log("VENTAS SEMANALES");
console.log("Total semanal: $" + ventasSemana);

console.log

console.log("MISIÓN");
console.log("Ofrecer mariscos frescos y deliciosos con excelente atención al cliente.");

console.log

console.log("VISIÓN");
console.log("Ser el restaurante de mariscos más reconocido de El Salvador.");

console.log

console.log("VALORES");
console.log("- Responsabilidad");
console.log("- Honestidad");
console.log("- Calidad");
console.log("- Respeto");
console.log("- Trabajo en equipo");

console.log("

console.log("Gracias por visitar Puerto Marisco");
console.log("¡Sabor salvadoreño del mar a su mesa!");
console.log