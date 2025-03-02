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

router.post("/holaPOST", (req, res) => {
    console.log("Enviada una petición post");
    console.log(req.body);
    // res.json({
    //    id: "001"
    //    nombre: req.body.nombre,
    //    apellido: req.body.apellido,
    // });
});

router.post("/rutaPOSTconBody1", (req, res) => {
    req.body = "Recopilamos la información de los formularios";

    console.log("Enviamos petición POST");
    console.log(req.body);
    res.json({
        Title: "Prueba para formulario con POST",
    });
});

router.post("/rutaPOST2", (req, res) => {
    console.log("Segundo intento de ruta POST.");
    res.send("Este es un mensaje para comprobación de la ruta POST");
});

router.post("/rutaPOST3", (req, res) => {
    console.log("Escribiendo la 3ª ruta POST");
    res.send("Hola desde mi primer proyecto");
});

router.post("/rutaPOST4", (req, res) => {
    console.log("Alguién está intentando leer esta ruta POST");
    res.send("Este mensaje se muestra en postman");
});

router.post("/rutaPOST5", (req, res) => {
    console.log("La complejidad de la ruta POST");
    res.send("No se puede ver el mensaje de la ruta post directamente desde google.");
});




module.exports = router;