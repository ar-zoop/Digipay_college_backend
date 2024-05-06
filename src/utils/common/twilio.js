const client = require('twilio')('ACe4333f03bc1afbf1b5aafab11590b53f', '2e885add6f0587c6186c292e77a5ba4b');
function sendTextMessage(body){
    console.log(body.message, body.to)
    client.messages.create({
        body: body.message,
        to: '+91'+body.to,
        from: '+12679532124'
    }).then(message => console.log(message))

        .catch(error => console.log(error))
}

module.exports = {
    sendTextMessage
}