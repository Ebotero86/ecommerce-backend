const validarMarca= (req) => {
    const validacion = [];

    if (!req.body.nombre) {
        validacion.push('El nombre de la marca es requerido');
    }
    return validacion;
}

module.exports = {
    validarMarca,
}