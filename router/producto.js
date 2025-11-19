const { Router } = require('express');
const Producto = require('../models/Producto');
const {validarProducto} = require('../helpers/validar_producto');

const router = Router();

router.post('/', async (req, res) => {
   
    try {

        const validaciones = validarProducto(req);
        if (validaciones.length > 0) {
            return res.status(400).send(validaciones);
        }
        let producto = new Producto();
        producto.nombre = req.body.nombre;
        producto.descripcion = req.body.descripcion;    
        producto.precio = req.body.precio;
        producto.foto = req.body.foto;
        producto.inventario = req.body.inventario;
        producto.vendedor = req.body.vendedor._id;
        producto.marca = req.body.marca._id;
        producto.categoria = req.body.categoria._id;
        producto.fechaCreacion = new Date();
        producto.fechaActualizacion = new Date();
        await producto.save();
        res.status(201).send(producto);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al crear el producto');
    }
});

router.get('/',  async (req, res) => {
    try {
        let productos = await Producto.find()
            .populate('vendedor')   
            .populate('marca')
            .populate('categoria');
        res.send(productos);
    } catch (error) {
        console.log(error);

        res.status(500).send('Error al obtener los productos');
    }
});

router.put('/:productoId', async (req, res) => {
    try {
        let productoId = req.params.productoId;
        let producto = await Producto.findById(productoId);
        if (!producto) {
            return res.status(404).send('Producto no encontrado');
        }       
        producto.nombre = req.body.nombre;
        producto.descripcion = req.body.descripcion;    
        producto.precio = req.body.precio;  
        producto.foto = req.body.foto;
        producto.inventario = req.body.inventario;
        producto.vendedor = req.body.vendedor._id;
        producto.marca = req.body.marca._id;
        producto.categoria = req.body.categoria._id;
        producto.fechaActualizacion = new Date();
        await producto.save();
        res.send(producto);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al actualizar el producto');
    }
});

router.delete('/:productoId', async (req, res) => {
    try {
        let productoId = req.params.productoId;
        let producto = await Producto.findByIdAndDelete(productoId);    
        if (!producto) {
            return res.status(404).send('Producto no encontrado');
        }
        res.send('Producto eliminado correctamente');
    } catch (error) {
        console.log(error);     
        res.status(500).send('Error al eliminar el producto');
    }
});

module.exports = router;


