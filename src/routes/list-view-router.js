const { Router } = require('express');
const router = Router();
const { mostrarLista, filterCompleted, imprimeID } = require('../controllers/controladores');


//1- Hacer una solicitud GET a una ruta específica para listar las todas tareas.
router.get('/task', mostrarLista)

//2- Hacer una solicitud GET a una ruta específica para ver una tarea en especifico.
router.get('/task/:id', imprimeID)

// 3- Hacer una solicitud GET a una ruta específica para filtrar por tareas completas o incompletas.
router.get('/task/filter/:isCompleted', filterCompleted)



module.exports = router;