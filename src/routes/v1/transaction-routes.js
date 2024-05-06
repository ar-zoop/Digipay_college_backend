const express = require("express");
const { TransactionController, UserController, WalletController, VoucherController } = require('../../controllers');
const { route } = require("./user-routes");
const { verifyToken } = require("../../middlewares/auth");


const router = express.Router();

router.get('/',verifyToken,TransactionController.getransactions)
router.get('/merchant',verifyToken,TransactionController.getMerchantTransactions)
router.post('/checkPincode', UserController.checkPincode, TransactionController.twilio, WalletController.addMoneyToWalletInw2wTransfer, WalletController.deleteNotes,  TransactionController.addTransaction);
router.post('/pay', verifyToken,  UserController.checkPincode , VoucherController.deductFromVoucher , TransactionController.twilio, TransactionController.twilioMerchant , TransactionController.addTransaction)
module.exports = router;