
enum DiaSemana {
    Lunes,
    Martes,
    Miércoles,
    Jueves,
    Viernes,
    Sábado,
    Domingo
}


function esFinDeSemana(dia: DiaSemana): boolean {
    switch (dia) {
        case DiaSemana.Sábado:
        case DiaSemana.Domingo:
            return true;
        default:
            return false;
    }
}

// Ejemplos de uso
console.log(`¿El Sábado es fin de semana? ${esFinDeSemana(DiaSemana.Sábado)}`); // true
console.log(`¿El Martes es fin de semana? ${esFinDeSemana(DiaSemana.Martes)}`); // false