const router = require("express").Router();
const lsgiaodichController=require("../controllers/lsgiaodichcontroller");

router.post("/addlskcd",lsgiaodichController.addLSKCD);
router.post("/addlsstk",lsgiaodichController.addLSSTK);
router.post("/addlsdh",lsgiaodichController.addLSDH);

module.exports = router;