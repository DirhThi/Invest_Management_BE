const router = require("express").Router();
const quyvayController = require("../controllers/quyvayControlller");

router.post("/add",quyvayController.addQuyvay);
router.get("/getall",quyvayController.getAllQuyvay);
router.get("/:id",quyvayController.getbyidQuyvay);



module.exports = router;