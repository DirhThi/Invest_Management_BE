const router = require("express").Router();
const userController=require("../controllers/userController");

router.get("/:email",userController.getUserByEmail);

module.exports = router;