const { Router } = require("express");
const router = Router();

//Rutas GET
app.get("/rutaGEt", (req, res) => {
    console.log("hola en la consola de node, desde la 1ª ruta GET en el servidor");
    res.send("hola soy la 1ª ruta GET");
})

router.get("/rutaGetConRouter", (req, res) => {
    console.log("hola en la consola de node, desde la 2ª ruta GET en el servidor");
    res.send("hola soy la 2ª ruta GET");
});


module.exports = router;