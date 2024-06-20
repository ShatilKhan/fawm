callInitSendSMS();

async function callInitSendSMS(messageDraft, movileNumber) {
        const accountSid = AccntSID
        const authToken = AuthToken
        const client = require('twilio')(accountSid, authToken);


    return new Promise((resolve, reject) =>{
        client.messages
            .create({
                body: 'Yo',
                from: 'whatsapp:+14155238886',
                to: 'whatsapp:+8801840656367'
            })
            .then((message) => {
                console.log(message.sid);
                resolve(message.sid)
            });
                
    });
}