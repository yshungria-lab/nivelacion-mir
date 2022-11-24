
/*2. Crea una función max que reciba un arreglo de números y retorne el número máximo SIN USAR el método Math.max de JavaScript. Si el arreglo está vacío debe retornar undefined */

const max = (arr) => {
    let result = 0;
    if (arr.length === 0) {
      return undefined;
    }
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > result) {
        result = arr[i];
      }
    }
    return result;
  }

  console.log(max([1, 2, 3])); // 3
  console.log(max([10, 9, 8, 7, 6, 5, 4])); // 10
  console.log(max([])); // undefined