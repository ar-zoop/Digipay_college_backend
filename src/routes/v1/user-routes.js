const express = require("express");
const { UserController } = require('../../controllers');
const { verifyToken } = require("../../middlewares/auth");


const router = express.Router();


router.post('/signin', UserController.signin);
router.post('/signup', UserController.signup);
router.get('/',verifyToken, UserController.getUser);
router.patch('/pincode',verifyToken, UserController.setPincode);
router.get('/pincode',verifyToken,  UserController.checkPincode);

module.exports = router;
