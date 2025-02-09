const express = require("express");
const app = express();

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), leerPuerto);

//Iniciando el servidor
function leerPuerto() {
    console.log("hola desde el puerto " + app.get("port"));
}

//Routes
app.use(require("./routes/index"));