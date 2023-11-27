const express = require('express');
const app = express();
const morgan = require('morgan');

//CONFIGURACIONES
app.set("PORT", 3000);
// Definimos los métodos HTTP válidos
const metodosValidos = ['GET', 'POST', 'PUT', 'DELETE'];

//MIDDLEWARE
const validarMetodoHttp = (req, res, next) => {
    // Obtenemos el método HTTP de la solicitud
    const metodoHttp = req.method;
    // Verificamos si el método HTTP es válido
    if (!metodosValidos.includes(metodoHttp)) {
        // Devolvemos el error
        res.status(405).send('Método HTTP no permitido');
    } else {
        next();
    }
};

app.use(morgan("dev"));
app.use(validarMetodoHttp);



//ROUTES
const rutasTareas_edit = require('./routes/list-edit-router');
const rutasTareas_view = require('./routes/list-view-router');

//AGREGAMOS MÓDULOS A EXPRESS
app.use(express.json())
app.use('/', rutasTareas_edit);
app.use('/', rutasTareas_view);


//EXPORTAMOS MÓDULOS
module.exports = app;