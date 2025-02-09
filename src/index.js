const express = require("express");
const app = express();

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), leerPuerto);

app.get("/rutaGEt", function (req, res) {
    console.log("hola en la consola de node, desde una llamada en el servidor");
    res.send("hola desde una web llamada en el servidor");
})

function leerPuerto() {
    console.log("hola desde el puerto " + app.get("port"));
}
