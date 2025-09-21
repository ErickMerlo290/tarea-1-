
enum EstadoProducto {
    Disponible = "Disponible",
    Agotado = "Agotado",
    Descontinuado = "Descontinuado"
}


type IDProducto = string | number;


interface Producto {
    id: IDProducto;
    nombre: string;
    precio: number;
    estado: EstadoProducto;
    descripcion?: string; 
}


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