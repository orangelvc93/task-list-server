const { Router } = require("express");
const router = Router();

const listaTarea = [
    {
        "id": 123456,
        "isCompleted": false,
        "description": "Pasear al perro",
    },
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
]

//Hacer una solicitud GET a una ruta específica para listar las todas tareas.
router.get('/list', (req, res) => {
    res.json(listaTarea)
})

//Hacer una solicitud GET a una ruta específica para ver una tarea en especifico
router.get('/list_id/:id', (req, res) => {
    const listId = req.params.id;
    const filtro_id = listaTarea.filter(tarea => tarea.id === parseInt(listId))
    res.json(filtro_id[0]);
})

//Hacer una solicitud GET a una ruta específica para filtrar por tareas completas o incompletas
router.get('/list_state/:isCompleted', (req, res) => {
    const isCompleted = req.params.isCompleted === 'true';
    const listaFiltrada = listaTarea.filter(tarea => tarea.isCompleted === isCompleted);
    res.json(listaFiltrada);
});








module.exports = router;