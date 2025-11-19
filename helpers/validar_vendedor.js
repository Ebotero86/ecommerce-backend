const validarVendedor= (req) => {
    const validacion = [];

    if (!req.body.nombre) {
        validacion.push('El nombre de el vendedor es requerido');
    }
    return validacion;
}

module.exports = {
    validarVendedor,
}