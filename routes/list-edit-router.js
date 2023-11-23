const { Router } = require('express');
const router = Router();



const listaTareas = [
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
];

router.get('/list', (req, res) => {
    res.json(listaTareas)
})

// 4. Hacer una solicitud POST a una ruta específica para crear una tarea.
router.post('/list/create', (req, res) => {
    const nuevaTarea = {
        id: req.body.id,
        isCompleted: false,
        description: req.body.description
    }
    const existe = listaTareas.some(tarea => tarea.id === nuevaTarea.id)
    if (existe) {
        return res.status(400).json({ error: 'El id ya existe' });
    }
    listaTareas.push(nuevaTarea);
    res.json(listaTareas)
})

//Hacer una solicitud DELETE a una ruta específica para eliminar una tarea en especifico.
router.delete('/list/delete/', (req, res) => {
    const tareaId = req.body.id;
    const index = listaTareas.findIndex(tarea => tarea.id === tareaId);
    if (index === -1) {
        return res.status(404).json({ error: 'La tarea no existe' });
    }
    listaTareas.splice(index, 1);
    res.json(listaTareas)
});

//Hacer una solicitud UPDATE a una ruta específica para actualizar una tarea en especifico.
router.put('/list/update/', (req, res) => {
    const tareaId = req.body.id;
    const index = listaTareas.findIndex(tarea => tarea.id === tareaId);
    if (index === -1) {
        return res.status(400).json({ error: "Estas ingresando un id que no existe." })
    }

    listaTareas[index].isCompleted = req.body.isCompleted;
    listaTareas[index].description = req.body.description;

    res.json(listaTareas)
})







module.exports = router;