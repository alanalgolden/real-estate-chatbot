require("dotenv").config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const toNumber = process.env.TWILIO_TO_NUMBER;
const client = require("twilio")(accountSid, authToken);

client.messages
  .create({
    body: "This is the ship that made the kessel Run in fourteen parsecs?",
    from: "+18556020512",
    to: `+${toNumber}`,
  })
  .then((message) => console.log(message.sid));
