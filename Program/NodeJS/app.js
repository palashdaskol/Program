var express = require('express');
//Changes
var app = express();
var bodyParser = require('body-parser');
var channelController = require('./Controllers/ChannelController')
app.set('view engine', 'ejs');

app.use(express.static('./public'));
//app.use(express.bodyParser());
// parse application/json
    app.use(bodyParser.json());

    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: true }));
channelController(app);
app.listen(3000);
console.log('you are listening to port 3000');
