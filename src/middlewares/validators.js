const fs = require('fs');
const { listaTareas } = require('../controllers/controladores');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

//Valida que los campos ID y DESCRIPTION no estén vacíos.
const validarCampos = (req, res, next) => {
    const { id, description } = req.body;
    if (!id || !description) {
        return res.status(400).json({ error: "Los campos deben tener un id y una descripción" });
    }
    next();
}

//Valida que el id no esté duplicado.
const validarDuplicados = (req, res, next) => {
    const { id, description } = req.body;
    const nuevaTarea = {
        id,
        isCompleted: false,
        description
    };
    const existe = listaTareas.some(task => task.id === nuevaTarea.id);
    if (existe) {
        return res.status(400).json({ error: `El id ${nuevaTarea.id} ya se encuentra en uso.` })
    };
    listaTareas.push(nuevaTarea);
    next();
}


//Validar que el indice exista.
const validaIndex = (req, res, next) => {
    const taskId = parseInt(req.body.id);
    const index = listaTareas.findIndex(task => task.id === taskId);
    if (index === -1) {
        return res.status(400).json({ error: "Estas ingresando un id que no existe." })
    }
    req.index = index;
    next()
};


//Validar JWT 
const JWTValidation = (req, res, next) => {
    const secretKey = process.env.SECRET_KEY; //definimos la llave secreta en una variable 
    const token = req.headers.authorization;
    if (token) {
        try {
            const user = jwt.verify(token, secretKey);
            const { rol } = user;
            req.rol = rol;
            next()
        } catch (error) {
            res.json({ error: "El token no es válido." })
        }
    }
};



module.exports = { validarCampos, validarDuplicados, validaIndex, JWTValidation }

