/* 4. Crear una función join que reciba un arreglo y retorne un string con todos los elementos separados por espacio SIN USAR el método join de los arreglos.*/
const join = (arr) => {
    let result = '';
    for (let i = 0; i < arr.length; i++) {
        result += arr[i] + ' ';
    }
    return result;
};

console.log(join(['hola', 'mundo'])); // 'hola mundo'
console.log(join(['Make', 'It', 'Real'])); // 'Make It Real'
console.log(join([])); // ''