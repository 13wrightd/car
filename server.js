  'use strict';

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

// we wont need this anymore because we are using mySQL not mongoDB
////////////////////////////////////
var mongoose = require('mongoose');


mongoose.connect('mongodb://admin1:serverpass3141@ds035806.mlab.com:35806/tminder');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error: '));
db.once('open', function(){
  console.log('Database connected.');
});
////////////////////////////////////



app.get('/', function (req, res) {
res.sendFile(__dirname+ '/index.html');
console.log('someone loaded homepage');
});
app.get('/js/*', function (req, res) {
res.sendFile(__dirname+ req.path);
});
app.get('/css/*', function (req, res) {
res.sendFile(__dirname+ req.path);
});
app.get('/pages/*', function (req, res) {
res.sendFile(__dirname+ req.path);
});

app.get('/images/*', function (req, res) {
res.sendFile(__dirname+ req.path);
});

io.on('connection', function(socket){
    socket.on('control', function(data){
		in1.digitalWrite(data.in1);
		in2.digitalWrite(data.in2);
		in3.digitalWrite(data.in3);
		in4.digitalWrite(data.in4);
		led.pwmWrite(data.left);
		led2.pwmWrite(data.right);
		console.log(data);
	});
	socket.on('disconnect', function() {
		console.log('someone left');
	});
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});