var nodemailer = require('nodemailer');

require('dotenv').config();

var transporter = nodemailer.createTransport({
    name: process.env.MAIL_HOST,
    service: process.env.MAIL_SERVICE,
    auth: {
        user: process.env.MAIL_ADDRESS,
        pass: process.env.MAIL_PASSWORD
    },
    logger: true,
    debug: true
});

var mailOptions = {
    from: process.env.MAIL_ADDRESS,
    to: '',
    subject: '',
    text: '!'
};


module.exports = { transporter, mailOptions }