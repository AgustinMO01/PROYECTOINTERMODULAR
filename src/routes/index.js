const { Router } = require("express");
const router = Router();

//Ruta GET
router.get("/rutaGetConRouter", function (req, res) {
    res.send("hola desde una web llamada en el servidor utilizando routes");
});

app.get("/rutaGEt", function (req, res) {
    console.log("hola en la consola de node, desde una llamada en el servidor");
    res.send("hola desde una web llamada en el servidor");
})

module.exports = router;