
let $ = require('jquery');
require('./less');

let App = function() {
    $('body').html('<div class="b-test"><h3 class="b-test__heading">Heading</h3></div>');
};
let app = new App();
app.fuck = function() {
    console.log('hello');
};
