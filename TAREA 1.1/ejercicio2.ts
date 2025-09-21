// 1. Interfaz para el objeto Usuario
interface Usuario {
    nombre: string;
    edad: number;
    email?: string; // Propiedad opcional
}

// 2. Objeto que cumple con la interfaz Usuario
const usuario1: Usuario = {
    nombre: "Ana García",
    edad: 28,
    email: "ana.garcia@example.com"
};

const usuario2: Usuario = {
    nombre: "Pedro Luis",
    edad: 35
};

// 3. Función para imprimir los detalles del usuario
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

// 4. Invocación de la función
imprimirUsuario(usuario1);
imprimirUsuario(usuario2);