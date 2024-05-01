//Highest number
// Escribe un programa que solicite 10 números. Usando operadores lógicos y cualquier otra función/estructura de JavaScript que haya visto antes, determine y genere el mayor de esos números.
/**
 * []Utilizamos array para ingresar una serie de números
 * []Utilizamos un for para solicitar el ingreso de 10 num
 */
// Array para almacenar los números ingresados por el usuario
const numeros = [];

// Solicitar al usuario que ingrese 10 números
for (let i = 0; i < 10; i++) {
    const numero = parseFloat(prompt(`Por favor, ingresa el número ${i + 1}:`));
    numeros.push(numero);
}

// Inicializar la variable para almacenar el mayor número
let mayorNumero = numeros[0];

// Iterar sobre los números ingresados para encontrar el mayor
for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > mayorNumero) {
        mayorNumero = numeros[i];
    }
}

// Mostrar el mayor número en la consola
console.log("El mayor número ingresado es:", mayorNumero);
