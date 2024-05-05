const CrudRepository = require("./crud-repository");
const { transactions } = require("../models");
const { response } = require("express");

class TransactionRepository extends CrudRepository {
    constructor() {
        super(transactions);
    }

    async create(data) {
        const response = await transactions.create(
            data
        );
        return response;
    }

    async getTransactions(data) {
        data.phoneNumber = Number(data.phoneNumber);
        
        const response = await transactions.findAll(
            {
            where: {
                userPhoneNumber: data.phoneNumber
            }
        });
        return response;
    }

}

module.exports = TransactionRepository;
