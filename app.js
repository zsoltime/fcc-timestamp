'use strict'
var express = require('express');
var path = require('path');
var timestamp = require('./timestamp');
var app = express();
var cors = require('cors');

app.set('port', process.env.PORT || 8000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    var data = {
        url: 'http://fcc-api-ts.herokuapp.com/',
        examples: [
            'June%2019,%202016',
            '06%2019,%202016',
            '06-19-2016',
            '2016 6 19',
            '1466290800'
        ],
        output: JSON.stringify(timestamp(1466290800), null, 2)
    };
    res.render('index', data);
});

app.get('/:date', cors(), function(req, res) {
    res.json(timestamp(req.params.date));
});

var server = app.listen(app.get('port'), function() {
    console.log('The app is running on http://localhost:%s', server.address().port);
});
