// Escriba un programa que solicite un número entero n . Donde  1 <= norte. Resuelve esto usando recursividad.

// Función recursiva para calcular la suma de los primeros n números enteros
function calcularSuma(n) {
    // Caso base: Si n es igual a 1, devolvemos 1
    if (n === 1) {
        return 1;
    }
    // Caso recursivo: Devolvemos n más la suma de los primeros n-1 números enteros
    return n + calcularSuma(n - 1);
}

const n = parseInt(prompt("Por favor, ingresa un número entero positivo:"));

if (!isNaN(n) && n >= 1) {
    const suma = calcularSuma(n);
    console.log(`La suma de los primeros ${n} números enteros es: ${suma}`);
} else {
    console.log("Por favor, ingresa un número entero positivo válido.");
}
