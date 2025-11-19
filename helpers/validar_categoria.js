const validarCategoria= (req) => {
    const validacion = [];

    if (!req.body.nombre) {
        validacion.push('El nombre del producto es requerido');
    }
    return validacion;
}

module.exports = {
    validarCategoria,
}