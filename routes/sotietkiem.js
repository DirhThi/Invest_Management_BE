const router = require("express").Router();
const sotietkiemController = require("../controllers/sotietkiemController");

router.post("/add",sotietkiemController.addSotietkiem);
router.get("/getall",sotietkiemController.getAllSotietkiem);
router.get("/:id",sotietkiemController.getbyidSotietkiem);



module.exports = router;