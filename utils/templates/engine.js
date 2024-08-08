const { templates } = require('./config');
const handlebars = require('handlebars');
const fs = require('fs');

const merger = (replacements, template_name , callback) => {
    // validation of template_name
    if (!templates[template_name]) {
        throw new Error('Template Validation Error');
    }
    // validation of replacements with fields 
    if (templates[template_name].fields) {
        for (let i = 0; i < templates[template_name].fields.length; i++) {
            if (!replacements[templates[template_name].fields[i]]) {
                throw new Error('Field Validation Error');
            }
        }
    }
    try {
        const data = fs.readFileSync(templates[template_name].path,"utf-8", (err, data) => {
            if (err) {
                console.log(err);
                return callback(err , null);
            }
            try {
                let d = data.toString();
                // console.log(d);
                var template = handlebars.compile(d);
                console.log(template(replacements));
                return callback(null , template(replacements));
            }
            catch (error) {
                console.log(error);
                return callback(error , null);
            }
        });
    }
    catch (error) {
        console.log(error);
    }

}

module.exports = { merger }