
function repetirNombre(nombre: string, veces: number): string[] {
    const arrayNombres: string[] = [];
    for (let i = 0; i < veces; i++) {
        arrayNombres.push(nombre);
    }
    return arrayNombres;
}


const nombresRepetidos = repetirNombre("Juan", 3);
console.log(nombresRepetidos); // ["Juan", "Juan", "Juan"]