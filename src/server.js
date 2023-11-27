const app = require('./app');


app.listen(app.get("PORT"), () => {
    console.log(`Servidor respondiendo en el puerto http://localhost:${app.get("PORT")}`);
})



