/*

La función calcularColor recibe un número como argumento y retorna un string de acuerdo al número:

Si el número es 1 retorna "El color es negro".
Si el número es 2 retorna "El color es blanco".Si el número es 3 retorna "El color es azul".
De lo contrario retorna "El color es verde".

El problema es que la función tiene algunos errores y no está funcionando. Tu misión es corregirla para que funcione correctamente según lo anterior.


*/

function calcularColor( numero ) {
    if ( numero === 1 ) {
        return "El color es negro";
    } else if ( numero === 2 ) {
        return "El color es blanco";
    } else if ( numero === 3 ) {
        return "El color es azul";
    } else {
        return "El color es verde";
    }
}

console.log(calcularColor(50));