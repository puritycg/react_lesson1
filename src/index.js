let str = require('./constant');
let $ = require('jquery');
let App = function () {
    console.log(str);
    $('body').html(str);
};

let app = new App();