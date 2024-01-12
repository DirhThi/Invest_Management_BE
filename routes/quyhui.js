const router = require("express").Router();
const quyhuiController = require("../controllers/quyhuiController");

router.post("/add",quyhuiController.addQuyhui);
router.get("/getall",quyhuiController.getAllQuyhui);
router.get("/:id",quyhuiController.getbyidQuyhui);



module.exports = router;