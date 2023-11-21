const express = require('express');
const app = express();
const rutasTareas_view = require('./routes/list-view-router');
const rutasTareas_edit = require('./routes/list-edit-router');


const PORT = 3000;

app.use(express.json())

app.use("/lista_view", rutasTareas_view)
app.use("/lista_edit", rutasTareas_edit)

app.listen(PORT, () => {
    console.log(`listening on port http://localhost:${PORT}`);
});