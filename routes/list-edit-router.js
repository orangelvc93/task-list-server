const { Router } = require('express');
const { agregar, listado, eliminar, editar } = require('../db/lista-tareas');

const router = Router();



// Hacer una solicitud POST a una ruta específica para crear una tarea.

router.post('/list', (req, res) => {
    const task = {
        id: req.body.id,
        isCompleted: false,
        description: req.body.description,
    };

    const result = agregar(task)

    res.json(result);
});

router.put('/lista_id', (req, res) => {
    const payload = {
        id: req.body.id,
        isCompleted: req.body.isCompleted,
        description: req.body.description,
    };
    // return res.json(task);
    const id = listado().findIndex((task) => task.id === req.body.id);

    if (id === -1) {
        return res.status(404).json({
            msg: "No exite la tarea con esa id"
        })

    }

    editar({ id, payload })
    return res.json({
        msg: "Tarea upteada"
    });


})

router.delete('/lista_id/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const existe = listado().filter((task) => task.id == id);
    console.log(existe.length)
    if (existe.length > 0) {
        eliminar(id);
        res.status(200).send(`Tarea eliminada con éxito`);

    } else {
        return res.status(404).json({ message: `La tarea con el id: ${id}, no existe` });

    }




    /* if (nuevaLista.id === id) {
    } else {
    } */

});











module.exports = router