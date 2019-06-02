//A Daniel le acaban de mandar una lista con sus calificaciones,
//quiere saber si su promedio es suficiente para tener una beca este año,
// el promedio mínimo que necesita es 8, el programa recibirá la cantidad de calificaciones
// y un arreglo de calificaciones para poder calcular el resultado

function promedio (calificaciones) {
    let suma = 0
    for (let index = 0; index < calificaciones.length; index++){
        suma += calificaciones[index];
       
    }
    return suma / calificaciones.length
}   

const xyz = [10, 7, 8, 9, 8, 7]

console.log(promedio(xyz))

    if (promedio(xyz) >= 8) 
    {
        console.log("Tienes beca")
    } else {
        console.log("No tienes beca")
    }