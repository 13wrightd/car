var socket = io();

var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
	    $scope.searchtext= "";

	});

$(document).ready(function(){
	console.log('document ready');		
	$('.in').click(function(){
		console.log("input clicked");
		if($(this).text()=="0"){
			$(this).text("1");
		}
		else{
			$(this).text("0");
		}
		data={
			left:$('#left').val(),
			right:$('#right').val(),
			in1:$('#in1').text(),
			in2:$('#in2').text(),
			in3:$('#in3').text(),
			in4:$('#in4').text()
		}
		socket.emit('control', data);
	});

	$("#left").change(function() {
		data={
			left:$('#left').val(),
			right:$('#right').val(),
			in1:$('#in1').text(),
			in2:$('#in2').text(),
			in3:$('#in3').text(),
			in4:$('#in4').text()
		}
		socket.emit('control', data);
	});
	$("#right").change(function() {
		data={
			left:$('#left').val(),
			right:$('#right').val(),
			in1:$('#in1').text(),
			in2:$('#in2').text(),
			in3:$('#in3').text(),
			in4:$('#in4').text()
		}
		socket.emit('control', data);
	});

	socket.on('button was clicked', function(msg){
		console.log('successful add');
		//$('#chat').append('<li>'+msg.first+ " " + msg.last+ ": " +msg.message+'</li>');
	});
});


