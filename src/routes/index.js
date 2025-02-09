const { Router } = require("express");
const router = Router();

//Rutas GET
router.get("/rutaGEt", (req, res) => {
    console.log("hola en la consola de node, desde la 1ª ruta GET en el servidor");
    res.send("hola soy la 1ª ruta GET");
})

router.get("/rutaGetConRouter", (req, res) => {
    console.log("hola en la consola de node, desde la 2ª ruta GET en el servidor");
    res.send("hola soy la 2ª ruta GET");
});

router.get("/rutaGetConJSON", (req, res) => {
    console.log("hola en la consola de node, desde la 3ª ruta GET en el servidor");
    res.json({
        Title: "Hola mundo con express probando cosas para subir a github",
    });
});


module.exports = router;