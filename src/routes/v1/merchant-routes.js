const express = require("express");
const { MerchantController, IABankController, TransactionController } = require('../../controllers');
const { verifyToken } = require("../../middlewares/auth");


const router = express.Router();

router.post('/signup', MerchantController.signup);
router.post('/signin', MerchantController.signin);
//router.post('/addBank', IABankController.createAcquirerBank);
router.get('/requestOTP', MerchantController.twilio);
//router.post('/acceptPayment', MerchantController.acceptPayment, IABankController.addMoneyToAcquirerBank, TransactionController.addTransaction);
router.post('/',verifyToken, MerchantController.getMerchant);


module.exports = router;
