const validarProducto = (req) => {
    const validacion = [];

    if (!req.body.nombre) {
        validacion.push('El nombre del producto es obligatorio');
    }
    if (!req.body.descripcion) {
        validacion.push('La descripción del producto es obligatoria');
    }
    if (!req.body.precio) {
        validacion.push('El precio del producto debe ser mayor a cero');
    }
    if (!req.body.foto) {
        validacion.push('La foto del producto es obligatoria');
    }
    if (!req.body.inventario) {
        validacion.push('El inventario del producto no puede ser negativo');
    }
    if (!req.body.vendedor  ) {
        validacion.push('El vendedor del producto es obligatorio');
    }
    if (!req.body.marca) {
        validacion.push('La marca del producto es obligatoria');
    }
    if (!req.body.categoria) {
        validacion.push('La categoría del producto es obligatoria');
    }
    return validacion;
}

module.exports = {
    validarProducto,
}