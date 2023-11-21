const { Router } = require("express");
const { listado } = require("../db/lista-tareas");
const router = Router();


//Hacer una solicitud GET a una ruta específica para listar las todas tareas.
router.get('/list', (req, res) => {
    res.json(listado())
})

//Hacer una solicitud GET a una ruta específica para ver una tarea en especifico
router.get('/list_id/:id', (req, res) => {
    const listId = req.params.id;
    const filtro_id = listado.filter(tarea => tarea.id === parseInt(listId))
    res.json(filtro_id[0]);
})

//Hacer una solicitud GET a una ruta específica para filtrar por tareas completas o incompletas
router.get('/list_state/:isCompleted', (req, res) => {
    const isCompleted = req.params.isCompleted === 'true';
    const listaFiltrada = listado.filter(tarea => tarea.isCompleted === isCompleted);
    res.json(listaFiltrada);
});



module.exports = router;