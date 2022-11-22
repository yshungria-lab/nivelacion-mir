/* 3. Crea una función maxIndex que reciba una arreglo de números y retorne el índice donde se encuentra el mayor. Si el arreglo está vacío debe retornar -1. */

const maxIndex = (arr) => {
    let mayor = 0;
    let indice = 0;
    if (arr.length === 0) {
        return -1;
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > mayor) {
            mayor = arr[i];
            indice = i;
        }
    }
    return indice;
};

console.log(maxIndex([1, 2, 3]));
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4]));
console.log(maxIndex([]));