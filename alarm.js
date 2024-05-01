// Escribe un programa que pregunte a un usuario la cantidad de segundos necesarios hasta que se ejecute una alarma (mensaje) junto con un texto para mostrar una vez que hayan pasado esos segundos en tiempo real. Ejemplo de resultado : "Hora de acostarse después de 10 segundos".

function mostrarMensajeDespuesDeSegundos(mensaje, segundos) {
    // Esperar la cantidad de segundos especificada
    setTimeout(() => {
        // Mostrar el mensaje después de que hayan pasado los segundos
        console.log(mensaje);
    }, segundos * 1000); // Convertir los segundos a milisegundos (1 segundo = 1000 milisegundos)
}

// Preguntar al usuario la cantidad de segundos
const segundos = parseInt(prompt("Ingrese la cantidad de segundos para la alarma:"));

// Verificar si se ingresó un número válido de segundos
if (!isNaN(segundos) && segundos > 0) {
    const mensaje = `Hora de acostarse después de ${segundos} segundos.`;
    console.log(`La alarma se activará en ${segundos} segundos.`);
    // Llamar a la función para mostrar el mensaje después de la cantidad de segundos especificada
    mostrarMensajeDespuesDeSegundos(mensaje, segundos);
} else {
    console.log("Por favor, ingrese un número válido de segundos.");
}
