// 1. Enum para los estados del producto

enum EstadoProducto {
    Disponible = "Disponible",
    Agotado = "Agotado",
    Descontinuado = "Descontinuado"
}

// 2. Tipo de unión para el ID del producto
type IDProducto = string | number;

// 3. Interfaz para el objeto Producto
interface Producto {
    id: IDProducto;
    nombre: string;
    precio: number;
    estado: EstadoProducto;
    descripcion?: string; // Propiedad opcional
}

// 4. Función para mostrar los detalles del producto
function mostrarDetallesProducto(producto: Producto): void {
    console.log("--- Detalles del Producto ---");
    console.log(`ID: ${producto.id}`);
    console.log(`Nombre: ${producto.nombre}`);
    console.log(`Precio: $${producto.precio}`);
    console.log(`Estado: ${producto.estado}`);
    if (producto.descripcion) {
        console.log(`Descripción: ${producto.descripcion}`);
    } else {
        console.log("Descripción: No disponible");
    }
    console.log("----------------------------");
}

// 5. Creación e invocación de la función
const producto1: Producto = {
    id: 12345,
    nombre: "Laptop Dell XPS 13",
    precio: 1200,
    estado: EstadoProducto.Disponible,
    descripcion: "Una potente laptop ultradelgada con pantalla InfinityEdge."
};

const producto2: Producto = {
    id: "SKU-987-XYZ",
    nombre: "Teclado Mecánico RGB",
    precio: 85,
    estado: EstadoProducto.Agotado
};

mostrarDetallesProducto(producto1);
mostrarDetallesProducto(producto2);

export const run = () => {
    // Pega aquí todo el código del Ejercicio 1 que ya tienes
    enum EstadoProducto { /* ... */ }
    type IDProducto = string | number;
    interface Producto { /* ... */ }
    function mostrarDetallesProducto(producto: Producto): void { /* ... */ }
    const producto1: Producto = { /* ... */ };
    const producto2: Producto = { /* ... */ };
    mostrarDetallesProducto(producto1);
    mostrarDetallesProducto(producto2);

};