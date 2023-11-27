const { Router } = require('express');
const router = Router();
const fs = require('fs');
const { listaTareas, agregarJson, eliminaTarea, modificaTarea } = require('../controllers/controladores');
const { validarCampos, validarDuplicados, validaIndex } = require('../middlewares/validators');

// 4. Hacer una solicitud POST a una ruta específica para crear una tarea.
router.post('/task', [validarCampos, validarDuplicados], agregarJson)

//5. Hacer una solicitud DELETE a una ruta específica para eliminar una tarea en especifico.
router.delete('/task/:id', validaIndex, eliminaTarea)

//6. Hacer una solicitud UPDATE a una ruta específica para actualizar una tarea en especifico.
router.put('/task', validaIndex, modificaTarea)


module.exports = router;