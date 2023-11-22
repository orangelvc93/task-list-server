const { Router } = require('express');
const router = Router();


/* const listaTareas = [
    {
        "id": 123457,
        "isCompleted": true,
        "description": "Preparar almuerzo",
    },
    {
        "id": 123458,
        "isCompleted": false,
        "description": "Ir al gimnasio",
    },
    {
        "id": 123459,
        "isCompleted": false,
        "description": "Practicar programación",
    }
] */


//Hacer una solicitud GET a una ruta específica para listar las todas tareas.
router.get('/list', (req, res) => {
    const listaTareas = req.app.locals.listaTareas;
    res.json(listaTareas)
})

//Hacer una solicitud GET a una ruta específica para ver una tarea en especifico.
router.get('/list/:id', (req, res) => {
    const listaTareas = req.app.locals.listaTareas;
    const tareaId = parseInt(req.params.id);
    const tareaEspecifica = listaTareas.find(tarea => tarea.id === tareaId);

    if (tareaEspecifica) {
        res.json(tareaEspecifica)
    } else {
        res.status(404).json({ msj: `La tarea con id ${tareaId} no existe.` })
    }
})






module.exports = router;


