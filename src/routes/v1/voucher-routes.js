const express = require('express');
const {  IABankMiddleware} = require("../../middlewares")
const { VoucherController } = require("../../controllers");
const { verifyToken } = require('../../middlewares/auth');

const router = express.Router();

router.post('/', IABankMiddleware.reduceMoneyFromIssuerBank, VoucherController.createVoucher);
router.patch('/', VoucherController.resendVoucher);
router.post('/getVoucher',verifyToken, VoucherController.getVoucher);

module.exports = router;
