var nodemailer = require('nodemailer');

require('dotenv').config();

var transporter = nodemailer.createTransport({
    name: "smtp.outlook.com",
    service: 'outlook',
    auth: {
        user: process.env.MAIL_ADDRESS,
        pass: process.env.MAIL_PASSWORD
    },
    // host: 'smtp.outlook.com',
    // secure: true,
    // port: 465,
    logger: true,
    debug: true
});

var mailOptions = {
    from: process.env.MAIL_ADDRESS,
    to: 'midhunmareedu@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};


module.exports = { transporter, mailOptions }