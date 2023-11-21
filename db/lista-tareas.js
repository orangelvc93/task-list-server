let listaTarea = [
    {
        "id": 123456,
        "isCompleted": false,
        "description": "Pasear al perro",
    }/* ,
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
    } */
]

const agregar = (payload = {}) => {

    listaTarea = [...listaTarea, payload];
    return listaTarea

}

const eliminar = (id) => {
    const nuevaLista = listaTarea.filter((task) => task.id !== id);
    listaTarea = [...nuevaLista]
    return listaTarea
}

const editar = ({ id, payload }) => {


    listaTarea[id] = payload;
    return listaTarea;

}

const listado = () => {
    return listaTarea
}


module.exports = { listado, editar, eliminar, agregar };