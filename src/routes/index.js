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

router.get("/rutaGet1", (req, res) => {
    console.log("hola en la consola de node, desde una la 2ª ruta GET en el servidor");
    res.send("Esta es la práctica para el prototipo");
});

router.get("/rutaGet2", (req, res) => {
    console.log("hola en la consola de node, desde una la 3ª ruta GET en el servidor");
    res.send("Tenemos que hacer rutas de tipo get");
});

router.get("/rutaGet3", (req, res) => {
    console.log("hola en la consola de node, desde una la 4ª ruta GET en el servidor");
    res.send("Esta es una de esas rutas y su mensaje es: HOLA");
});

router.get("/rutaGet4", (req, res) => {
    console.log("hola en la consola de node, desde una la 4ª ruta GET en el servidor");
    res.send("Esta es una de esas rutas y su mensaje es: ADIOS");
});


module.exports = router;