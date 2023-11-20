const express = require('express');
const app = express();

const PORT = 3000;


app.get('/', (req, res) => {
    res.json(
        [
            {
                "id": 123456,
                "isCompleted": false,
                "description": "Pasear al perro",
            },
            {
                "id": 123457,
                "isCompleted": false,
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
    )
})



app.listen(PORT, () => {
    console.log(`listening on port http://localhost:${PORT}`);
});