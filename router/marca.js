const { Router } = require('express');
const Marca = require('../models/Marca');
const { validarMarca } = require('../helpers/validar_marca');

const router = Router();

router.post('/', async (req, res) => {
   
    try {
        const validaciones = validarMarca(req);
        if (validaciones.length > 0) {
            return res.status(400).send(validaciones);
        }
        let marca = new Marca();
        marca.nombre = req.body.nombre;
        marca.fechaCreacion = new Date();
        marca.fechaActualizacion = new Date();
        marca = await marca.save();
        res.send(marca);
    } catch (error) {
        console.log(error)
    }
    
});

router.get('/', async (req, res) => {
    try {
        const marcas = await Marca.find();  
        res.send(marcas);
    } catch (error) {
        console.log(error)
    }
});

router.put('/:marcaId', async (req, res) => {
    try {
        const marcaId = req.params.marcaId;
        let marca = await Marca.findById(marcaId);
        if(!marca){
            return res.status(404).send({mensaje: 'Marca no encontrada'});
        }
        marca.nombre = req.body.nombre;
        marca.fechaActualizacion = new Date();
        marca = await marca.save();
        res.send(marca);
    } catch (error) {
        console.log(error)
    }
});

router.delete('/:marcaId', async (req, res) => {
    try {
        const marcaId = req.params.marcaId;
        let marca = await Marca.findById(marcaId);  
        if(!marca){
            return res.status(404).send({mensaje: 'Marca no encontrada'});
        }
        await Marca.findByIdAndDelete(marcaId);
        res.send({mensaje: 'Marca eliminada'});
    } catch (error) {

        console.log(error)
    }
});

module.exports = router;






