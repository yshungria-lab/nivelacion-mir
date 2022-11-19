/*

Escribe una función llamada suma que reciba un número positivo
y retorne la suma de todos los números desde 1 hasta ese número:

*/

function suma( numero ) {
    let resultado = 0;
    for ( let i = 1; i <= numero; i++ ) {
        resultado += i;
    }
    return resultado;
}

console.log(suma(4));
console.log(suma(10));
console.log(suma(15));