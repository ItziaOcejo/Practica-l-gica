// Escriba un programa que solicite al usuario sus datos: nombre de usuario, edad y una lista de sus películas favoritas. Almacene la información y luego muéstrela en la consola. Tenga en cuenta que el resultado de las películas debe agregar un pequeño mensaje como: 'La película {película} es una de mis favoritas'.
/**
 * []Declarar datos de usuario
 *  []Usuario
 *  []Edad
 *  []Peliculas favoritas
 * []Mostrar mensaje de pelicula favorita
 */

const username = prompt("Por favor, ingresa tu nombre de usuario:");
const age = parseInt(prompt("Por favor, ingresa tu edad:"));

// Solicitar la lista de películas favoritas al usuario
const moviesFav = prompt("Por favor, ingresa una lista de tus películas favoritas separadas por comas:");
const movies = moviesFav.split(",");

// Mostrar la información ingresada por el usuario en la consola
console.log("Nombre de usuario:", username);
console.log("Edad:", age);
console.log("Lista de películas favoritas:");

// Iterar sobre la lista de películas favoritas
movies.forEach((movie, index) => {
    if (index === 1) {
        console.log(`La película ${movie} es una de mis favoritas.`);
    } else {
        console.log(movie);
    }
});
