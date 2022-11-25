const receta = {}

receta.nombre = "Sandwich"
receta.ingredientes = []
receta.ingredientes.push({nombre: "Pan", cantidad: 2})
receta.ingredientes.push({nombre: "Queso", cantidad: 1})

console.log(receta)
console.log(receta.ingredientes[0].nombre)

function suma_ingredientes(receta) {
    let suma = 0
    for (let i = 0; i < receta.ingredientes.length; i++) {
        suma += receta.ingredientes[i].cantidad
    }
    return suma
}
console.log(suma_ingredientes(receta))
