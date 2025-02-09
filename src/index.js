const express = require("express");
const app = express();

app.set("port", process.env.PORT || 8080);

//Routes
app.use(require("./routes/index"));

//Iniciando el servidor
app.listen(app.get("port"), function () {
    console.log("hola desde el puerto " +app.get("port"));
});
