/*
Dado este arreglo de numeros
[10, 5, 25, 8,3,0]
crea una funcion que devuelva el numero mas grande
*/

let arr = [10, 5, 25, 8, 3, 0];
function mayorque (arr) {
    let mayorque
    for(let i=0; i<arr.length; i++) {
        if (arr[i]> arr [i+1]) {
            mayorque = arr [i];
        }
    } console.log("El número mayor es " + mayorque);
}
