const router = require("express").Router();
const lsgiaodichController=require("../controllers/lsgiaodichcontroller");

router.post("/addlskcd",lsgiaodichController.addLSKCD);

module.exports = router;