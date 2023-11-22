const { Router } = require('express');
const router = Router();




// 4. Hacer una solicitud POST a una ruta específica para crear una tarea.
router.post('/list/create', (req, res, next) => {
    const listaTareas = req.listaTareas;

    const tarea = {
        id: req.body.id,
        isCompleted: false,
        description: req.body.description
    }

    listaTareas.push(tarea);
    req.listaTareas = listaTareas;
    res.json(req.listaTareas)
})








module.exports = router;