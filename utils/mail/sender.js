const { transporter, mailOptions } = require("./config");
var { merger } = require('../templates/engine');
const sendMail = async (to, subject, text) => {
    mailOptions.to = to;
    mailOptions.subject = subject;
    merger(replacements = { name: 'Midhun' }, 'greetings' , (err, result) => {
        if (err) {
            console.log(err);
            mailOptions.text = text;
        } else {
            console.log("result from merger", result);
            mailOptions.text = result;
        }
    });
    try {
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                return false;
            } else {
                console.log('Email sent: ' + info.response);
                return true;
            }
        });
        return true
    } catch (error) {
        console.log(error);
        return false
    }
}

module.exports = { sendMail }