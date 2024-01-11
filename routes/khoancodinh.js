const router = require("express").Router();
const khoancodinhController = require("../controllers/khoancodinhController");

router.post("/add",khoancodinhController.addKhoanCoDinh);
router.get("/getall",khoancodinhController.getAllKhoancodinh);
router.get("/:id",khoancodinhController.getbyidKhoancodinh);



module.exports = router;