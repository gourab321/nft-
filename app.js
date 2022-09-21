const express = require('express');
const bodyparser = require('body-parser');

app = express();
app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({required: true}));


app.get('/', function(req, res) {
    res.render('index');
});


app.listen('3000', function() {
    console.log('http://localhost:3000');
})