// check functions 

const { mail_format } = require("./format");


const checkMail = (mail) => {
    if (mail_format.test(mail)) {
        return true
    } else {
        return false
    }
}


module.exports = { checkMail }