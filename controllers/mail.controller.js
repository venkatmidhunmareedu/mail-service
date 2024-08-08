const sendMail = require("../utils/mail/sender").sendMail;

const sender = async (req,res) => {
    const { mail ,  message }  = req.body;
    try {
        const result = await sendMail(to=mail, subject="Message from Server", text=message);
        console.log();
        if (result == true) {
            res.status(200).json({ message: 'Email sent successfully' , success: true });
        } else {
            res.status(400).json({ message: 'Email not sent' , success: false });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = { sender }