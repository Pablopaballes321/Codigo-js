// Algoritmo con un condicional
let numeroIngresado = prompt("Ingresar número");
let mayorMenor = parseInt(numeroIngresado);

if (mayorMenor === 0) {
    console.log("El número ingresado es Cero");
} else {
    console.log("El número ingresado es mayor o menor a 0");
}

// Algoritmo utilizando un ciclo
for (let i = 1; i <= 5; i++) {
    console.log("número: " + i);
}

// Simulador interactivo 
console.log("Bienvenido al Simulador Interactivo");

let saldo = 0;

while (true) {
    let opcion = prompt("Selecciona una opción:\n1. Depositar\n2. Retirar\n3. Consultar saldo\n4. Salir");

    if (opcion == "1") {
        let deposito = parseFloat(prompt("Ingresa la cantidad a depositar:"));
        if (!isNaN(deposito) && deposito > 0) {
            saldo += deposito;
            console.log("Depósito realizado con éxito");
        } else {
            console.log("Cantidad inválida");
        }
    } else if (opcion == "2") {
        let retiro = parseFloat(prompt("Ingresa la cantidad a retirar:"));
        if (!isNaN(retiro) && retiro > 0) {
            if (retiro <= saldo) {
                saldo -= retiro;
                console.log("Retiro realizado con éxito");
            } else {
                console.log("Saldo insuficiente");
            }
        } else {
            console.log("Cantidad inválida");
        }
    } else if (opcion == "3") {
        console.log("Saldo actual:", saldo);
    } else if (opcion == "4") {
        console.log("Gracias por utilizar el Simulador Interactivo");
        break;
    } else {
        console.log("Opción inválida. Por favor, selecciona una opción válida");
    }
}



