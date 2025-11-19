const { Router } = require('express');
const Vendedor = require('../models/Vendedor');
const { validarVendedor } = require('../helpers/validar_vendedor');
const router = Router();

router.post('/', async (req, res) => {
   
    try {
        const validaciones = validarVendedor(req);
        if (validaciones.length > 0) {
            return res.status(400).send(validaciones);
        }
        let vendedor = new Vendedor();
        vendedor.nombre = req.body.nombre;
        vendedor.fechaCreacion = new Date();
        vendedor.fechaActualizacion = new Date();
        vendedor = await vendedor.save();
        res.send(vendedor);
    } catch (error) {
        console.log(error)
    }

});

router.get('/', async (req, res) => {
    try {
        const vendedores = await Vendedor.find();
        res.send(vendedores);
    } catch (error) {
        console.log(error)
    }
});

router.put('/:vendedorId', async (req, res) => {
    try {
        const vendedorId = req.params.vendedorId;
        let vendedor = await Vendedor.findById(vendedorId);
        if(!vendedor){
            return res.status(404).send({mensaje: 'Vendedor no encontrado'});
        }
        vendedor.nombre = req.body.nombre;
        vendedor.fechaActualizacion = new Date();
        vendedor = await vendedor.save();
        res.send(vendedor);
    } catch (error) {
        console.log(error)
    }
});

router.delete('/:vendedorId', async (req, res) => {
    try {
        const vendedorId = req.params.vendedorId;
        let vendedor = await Vendedor.findById(vendedorId);
        if(!vendedor){
            return res.status(404).send({mensaje: 'Vendedor no encontrado'});
        }
        await Vendedor.findByIdAndDelete(vendedorId);
        res.send({mensaje: 'Vendedor eliminado'});
    } catch (error) {
        console.log(error)
    }
});

module.exports = router;