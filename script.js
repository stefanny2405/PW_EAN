function agregarAlCarrito(nombreProducto, precio) {
    alert("Producto agregado " + nombreProducto + " con descuento " + tieneDescuento(precio))
}

function tieneDescuento(precioPructo) {
    if (precioPructo > 50000) {
        return '20%'
    } else {
        return '10%'
    }
}