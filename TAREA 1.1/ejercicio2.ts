
interface Usuario {
    nombre: string;
    edad: number;
    email?: string; // Propiedad opcional
}


const usuario1: Usuario = {
    nombre: "Ana García",
    edad: 28,
    email: "ana.garcia@gmail.com"
};

const usuario2: Usuario = {
    nombre: "Pedro Luis",
    edad: 35
};


function imprimirUsuario(usuario: Usuario): void {
    console.log("--- Detalles del Usuario ---");
    console.log(`Nombre: ${usuario.nombre}`);
    console.log(`Edad: ${usuario.edad}`);
    if (usuario.email) {
        console.log(`Email: ${usuario.email}`);
    } else {
        console.log("Email: No proporcionado");
    }
    console.log("----------------------------");
}

imprimirUsuario(usuario1);
imprimirUsuario(usuario2);