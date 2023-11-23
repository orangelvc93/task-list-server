const { Router } = require('express');
const router = Router();



//1- Hacer una solicitud GET a una ruta específica para listar las todas tareas.
router.get('/list', (req, res) => {
    res.json(req.listaTareas)
})

//2- Hacer una solicitud GET a una ruta específica para ver una tarea en especifico.
router.get('/list/:id', (req, res) => {
    const listaTareas = req.listaTareas;
    const tareaId = parseInt(req.params.id);
    const tareaEspecifica = listaTareas.find(tarea => tarea.id === tareaId);

    if (tareaEspecifica) {
        res.json(tareaEspecifica)
    } else {
        res.status(404).json({ msj: `La tarea con id ${tareaId} no existe.` })
    }
})

// 3- Hacer una solicitud GET a una ruta específica para filtrar por tareas completas o incompletas.
router.get('/list/filter/:isCompleted', (req, res) => {
    const listaTareas = req.listaTareas;
    const isCompleted = req.params.isCompleted === "true";

    if (isCompleted === true) {
        const tareasCompletadas = listaTareas.filter(tarea => tarea.isCompleted === isCompleted)
        return res.json(tareasCompletadas)
    } else {
        const tareasIncompletas = listaTareas.filter(tarea => tarea.isCompleted === isCompleted)
        return res.json(tareasIncompletas)
    }
})





module.exports = router;


