const { Router } = require("express");
const router = Router();

//Raiz
router.get("/rutaGetConRouter", function (req, res) {
    res.send("hola desde una web llamada en el servidor utilizando routes");
});

module.exports = router;