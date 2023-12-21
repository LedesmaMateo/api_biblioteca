const express = require('express');
const route = express.Router();

const Libro = require('../model/libro');

route.get("/", async (req, res, next) => {
    try {
        const libros = await Libro.find();
        res.json(libros);
    } catch (error) {
        next(error);
    }
});

route.post("/", async (req, res, next) => {
    try {
        const nuevoLibro = new Libro(req.body);
        await nuevoLibro.save();
        res.json(nuevoLibro);

    } catch (error) {
        next(error);
    }
});

route.put("/:id", async (req, res, next) => {
    try {
        const libroActualizado = await Libro.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        res.json({ message: "Libro actualizado: ", libroActualizado });
    } catch (error) {
        next(error);
    }
});

route.delete("/:id", async (req, res, next) => {
    try {
        const libroEliminado = await Libro.findByIdAndDelete(req.params.id);
        if(!libroEliminado){ 
            throw error = {
                message: `Libro con id : (${req.params.id}) no encontrado`
            };
        }

        res.json({message: "Libro eliminado: ", libroEliminado});
    } catch (error) {
        next(error);
    }
})

module.exports = route;
