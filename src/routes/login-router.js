const { Router } = require('express');
const router = Router();
const fs = require('fs');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const { JWTValidation } = require('../middlewares/validators');
const { listaUsers } = require('../controllers/controladores');


dotenv.config();


//LOGIN
router.post('/login', (req, res) => {

    const secretKey = process.env.SECRET_KEY; //definimos la llave secreta en una variable

    const email = req.body.email;
    const options = {
        expiresIn: "1h",  //El token expira en 1 hora
    };
    const user = listaUsers.find(user => user.email === email);
    if (user === undefined) {
        return res.status(401).send({ error: "Usuario o contraseña invalido" });
    }
    const token = jwt.sign({ ...user }, secretKey, options);
    return res.json({ token });
})


//Usuarios administradores
router.get('/premium-clients', JWTValidation, (req, res) => {
    const rol = req.rol;

    if (rol === "admin") {
        return res.json({ message: "Usuario Administrador - Acceso permitido" });
    } else {
        return res.status(401).json({ error: "Acceso no permitido" });
    }
});

router.get('/medium-clients', JWTValidation, (req, res) => {
    const rol = req.rol;
    const existe = listaUsers.some(user => user.rol === rol);

    if (existe) {
        return res.json({ message: "Inicio de sesión como usuario normal" });
    } else {
        return res.status(401).json({ error: "Acceso no permitido" });
    }
})


module.exports = router;