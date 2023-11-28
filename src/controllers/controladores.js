const fs = require('fs');

//Leemos el archivo json y transformamos el contenido de string a json
//tabla task
const listaJson = fs.readFileSync('src/lista-tareas.json', 'utf-8');
const listaTareas = JSON.parse(listaJson);

//tabla users
const userJson = fs.readFileSync('src/lista-usuarios.json', 'utf-8');
const listaUsers = JSON.parse(userJson);

//Agrega tarea al json
const agregarJson = (req, res) => {
    //Convertimos el array en un string.
    const listaTareaJson = JSON.stringify(listaTareas);
    //Escribimos el archivo y guardamos la información de la lista de tareas
    fs.writeFileSync('src/lista-tareas.json', listaTareaJson, 'utf-8')
    res.status(200).json({ msj: 'Acción exitosa.' })
}

//Mostrar la lista completa
const mostrarLista = (req, res) => {
    return res.json(listaTareas)
}

//Imprime tarea por ID
const imprimeID = (req, res) => {
    const taskId = parseInt(req.params.id);
    const findTask = listaTareas.find(task => task.id === taskId);

    if (findTask) {
        res.json(findTask)
    } else {
        res.status(404).json({ error: `La tarea con id ${taskId} no existe.` })
    }
}

//const filtrar true o false
const filterCompleted = (req, res) => {
    const isCompleted = req.params.isCompleted === "true";
    if (isCompleted) {
        const taskCompleted = listaTareas.filter(task => task.isCompleted === isCompleted);
        return res.json(taskCompleted);
    } else {
        const taskIncompleted = listaTareas.filter(task => task.isCompleted === isCompleted);
        return res.json(taskIncompleted);
    }
}

const eliminaTarea = (req, res) => {
    listaTareas.splice(req.index, 1);
    agregarJson(req, res)
}

const modificaTarea = (req, res) => {
    listaTareas[req.index].isCompleted = req.body.isCompleted;
    listaTareas[req.index].description = req.body.description;

    agregarJson(req, res);
}


module.exports = {
    listaTareas,
    listaJson,
    userJson,
    listaUsers,
    mostrarLista,
    agregarJson,
    filterCompleted,
    imprimeID,
    eliminaTarea,
    modificaTarea
};