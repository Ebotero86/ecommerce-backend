const { Router } = require('express');
const Categoria = require('../models/Categoria');

const router = Router();

router.post('/', (req, res) => {
   
    try {

        let categoria = new Categoria();
        categoria.nombre = req.body.nombre;
        categoria.fechaCreacion = new Date();
        categoria.fechaActualizacion = new Date();

        categoria = categoria.save();
        res.send(categoria);
        
    } catch (error) {
        console.log(error)   
        
    }
    
});

router.get('/', async (req, res) => {
    try {
        const categorias = await Categoria.find();
        res.send(categorias);   
    } catch (error) {
        console.log(error)
    }
});

router.put('/:categoriaId', async (req, res) => {
    try {
        const categoriaId = req.params.categoriaId;
        let categoria = await Categoria.findById(categoriaId);

        if(!categoria){
            return res.status(404).send({mensaje: 'Categoria no encontrada'});
        }
        categoria.nombre = req.body.nombre;
        categoria.fechaActualizacion = new Date();
        categoria = await categoria.save();
        res.send(categoria);
    } catch (error) {
        console.log(error)
    }
});

router.delete('/:categoriaId', async (req, res) => {
    try {
        const categoriaId = req.params.categoriaId;
        let categoria = await Categoria.findById(categoriaId);  
        if(!categoria){
            return res.status(404).send({mensaje: 'Categoria no encontrada'});
        }
        await Categoria.findByIdAndDelete(categoriaId);
        res.send({mensaje: 'Categoria eliminada'});
    } catch (error) {
        console.log(error)
    }
});

module.exports = router;