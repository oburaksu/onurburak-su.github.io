const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('c:/Users/onurb/Desktop/onurburak-su.github.io-main/onurburak-su.github.io-main/WebLab_Flexbox_Uygulama.pdf');

pdf(dataBuffer).then(function(data) {
    console.log(data.text);
}).catch(err => {
    console.error(err);
});
