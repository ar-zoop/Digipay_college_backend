const { response } = require('express');
const { SuccessResponse, ErrorResponse } = require('../utils/common');
const { Twilio } = require('../utils/common')
const {TransactionService}= require ('../services');
const { StatusCodes } = require('http-status-codes')


async function returnTheResponse(req, res) {
	try {
		const response = await UserService.getPincode(req.body.phoneNumber);
		SuccessResponse.data = req.body;
		return res.status(201).json(SuccessResponse);
	} catch (error) {
		ErrorResponse.error = error;
		return res.status(500).json(ErrorResponse);
	}
}

async function twilio(req,res, next) {
	try {
		const body = {
			to: String(req.body.phoneNumber),
			from: '+13612667516',
			message: `Your Transaction has been Successful.`
		};
		const response = Twilio.sendTextMessage(body);
		next();
	} catch (error) {
		ErrorResponse.error = error;
		return res.status(500).json(ErrorResponse);
	}
}

async function twilioMerchant(req,res, next) {
	try {
		const body = {
			to: String(req.body.merchantPhoneNumber),
			from: '+13612667516',
			message: `Your Transaction has been Successful.`
		};
		const response = Twilio.sendTextMessage(body);
		next();
	} catch (error) {
		ErrorResponse.error = error;
		return res.status(500).json(ErrorResponse);
	}
}


async function addTransaction(req, res) {
	try {
		//console.log("in addtransction")
		const response = await TransactionService.addTransaction({
			merchantPhoneNumber: req.body.merchantPhoneNumber, 
			userPhoneNumber: req.body.phoneNumber, 
			amount: req.body.amount,
			voucherId: req.body.voucherId
		});
		console.log("out of addtransction")
		SuccessResponse.data = response;
		console.log("returnng from addtransction")
		return res.status(201).json(SuccessResponse);
	} catch (error) {
		ErrorResponse.error = error;
		return res.status(500).json(ErrorResponse);
	}
}

async function voucherPayment(req, res) {
	try {
		const response = await MerchantService.getMerchant({
			merchantPhoneNumber: req.body.phoneNumber, 
			userPhoneNumber: req.body.userPhoneNumber, 
			amount: req.body.amount,
			voucherId: req.body.voucherId
		});
		SuccessResponse.data = response;
		return res.status(201).json(SuccessResponse)
	} catch (error) {
		ErrorResponse.error = error;
		return res.status(500).json(ErrorResponse)
	}
}

async function getransactions(req, res) {
    try {
        const user = await TransactionService.getTransactions({
            phoneNumber: req.body.phoneNumber
        });
		// console.log("Reached out of controller-", user)
        SuccessResponse.data = user;
        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse);
    } catch (error) {
        console.log(error);
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse);
    }
}

module.exports = {
	returnTheResponse,
	twilio,
	addTransaction,
	getransactions,
	voucherPayment,
	twilioMerchant
}