const express = require('express');
const app = express();
const rutasTareas = require('./list-view-router');


const PORT = 3000;

app.use("/", rutasTareas)

app.listen(PORT, () => {
    console.log(`listening on port http://localhost:${PORT}`);
});