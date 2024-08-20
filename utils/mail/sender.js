const { transporter, mailOptions } = require("./config");
const sendMail = async (to, subject, text) => {
    mailOptions.to = to;
    mailOptions.subject = subject;
    mailOptions.text = text;
    try {
        await transporter.sendMail(mailOptions).then((info) => {
            // console.log(info.response);
            return true
        }).catch((error) => {
            console.log("Error in sending mail",error);
            return false
        })
    } catch (error) {
        console.log(error);
        return false
    }
}

module.exports = { sendMail }