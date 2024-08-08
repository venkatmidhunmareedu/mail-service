const path = require('path');

var templates = {
    greetings : {
        path: path.join(__dirname, 'views', 'greetings.html'),
        fields : ['name']
    }
}

module.exports = { templates }