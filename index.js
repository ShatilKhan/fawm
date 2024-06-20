const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const port = 3000;

const accountSid = AccntSID
const authToken = AuthToken
const client = require('twilio')(accountSid, authToken);

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.post('/reply', express.json(), (req, res) => {
    return new Promise((resolve, reject) => {
        console.log(req.body.Body);

        var messageToSend = "";

        if(req.body.Body == 'hi'){
            messageToSend = "Hello! How may I assist you?";
        }else {
            messageToSend = "Hello "+req.body.Body+" How may I assist you?";
        }

        client.messages
            .create({
                body: messageToSend,
                from: 'whatsapp:+14155238886',
                to: 'whatsapp:+8801840656367'
            })
            .then((message) => {
                console.log(message.sid);
                resolve(message.sid)
            });
    });
    res.send('send via callback');
})

app.post('/callback', (req, res) => {
    res.send('Hello World!');
})

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);   
})