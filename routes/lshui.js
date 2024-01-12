const router = require("express").Router();
const lshuiController=require("../controllers/lshuiController");

router.post("/addlshui",lshuiController.addLSHui);


module.exports = router;