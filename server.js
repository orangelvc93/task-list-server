const express = require('express');
const morgan = require('morgan');
const app = express();
// Importamos los enrutadores
const rutasTareas_view = require('./routes/list-view-router')
const rutasTareas_edit = require('./routes/list-edit-router')

const PORT = 3000;


// Función middleware para almacenar el array de tareas
function middleware(req, res, next) {
    // Almacenamos el array de tareas en la memoria
    req.listaTareas = [
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

    next();
}
//Registramos el Middleware
app.use(middleware);
app.use(morgan('combined'));

// Usamos el array de tareas almacenado en el middleware
app.use(express.json());

app.use('/view', rutasTareas_view);
app.use('/edit', rutasTareas_edit);




app.listen(PORT, () => {
    console.log(`Servidor respondiendo en el puerto http://localhost:${PORT}`);
})



