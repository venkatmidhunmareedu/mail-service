const { checkMail } = require("../utils/validation/check");

const sendMail = require("../utils/mail/sender").sendMail;

const sender = async (req, res) => {
    var { mail, subject, message } = req.body;
    try {
        // validation
        if (!mail || !subject || !message) {
            throw new Error('All fields are required');
        }
        else {
            if (mail == "" || subject == "" || message == "") {
                throw new Error('Null values are not allowed');
            }
        }

        console.log("check mail", checkMail(mail));

        if (!checkMail(mail)) {
            // console.log("check mail",checkMail(mail));
            throw new Error('Invalid Email');
        }

        // send mail
        await sendMail(to = mail, subject = subject, text = message).then((info) => {
            res.status(200).json({ message: 'Email sent successfully', success: true });
        }).catch((error) => {
             throw new Error(error);
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message, success: false });
    }
}

module.exports = { sender }