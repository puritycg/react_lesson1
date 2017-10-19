
let string1 = 'hello';
let $ = require('jquery');
let App = function() {
    console.log(string1);
    $('body').html(string1);
};
let app = new App();
app.fuck = function() {
    console.log('hello');
};
