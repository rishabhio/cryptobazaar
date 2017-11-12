const fs = require('fs');
const path = require('path');
const bodyParser = require("body-parser");
const express = require('express');


var app = require('express')();
var server = require('http').Server(app);
var request = require('request');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/', express.static(path.join(__dirname, 'static')))

app.get('/callback', function(req, res) {
    var q = req.query.code;
    console.log(q);
    var formdata = {
        grant_type: 'authorization_code',
        code: q,
        client_id: 'YOUR_CLIENT_ID',
        client_secret: 'YOUR_CLIENT_SECRET',
        redirect_uri: 'http://localhost:3000/callback'
    }
    request.post({ url: 'https://api.coinbase.com/oauth/token', formData: formdata }, function(err, httpResponse, body) {
        body = JSON.parse(body);
        if (err) {
            return console.error('upload failed:', err);
        }
        console.log('mission successful!  Server responded with:', body);
        var resbody = '<html> <head> <script> \
		window.opener.postMessage("' + body.access_token + '","http://localhost:3000"); window.close()  </script> </head> </html>'
        return res.send(resbody);
    });


});


app.get('/user', function(req, res) {
    var access_token = req.query.token;
    console.log('token is ' + access_token);
    request.get('https://api.coinbase.com/v2/user', {
        'auth': {
            'bearer': access_token
        }
    }).pipe(res);


})

// end point used to fetch account info 
app.get('/accounts', function(req, res) {
    var access_token = req.query.token;
    request.get('https://api.coinbase.com/v2/accounts', {
        'auth': {
            'bearer': access_token
        }
    }).pipe(res);
})


server.listen(3000);
console.log('listening on 3000');