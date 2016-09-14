var express = require('express');
var path = require('path')

var app = express();

app.use('/static', express.static(path.join(__dirname , '/public')))

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, '/public', '/html', 'mockuser.html'))
})

app.listen(process.env.PORT || 3005, function(){
	console.log('mock-users.com is running')
})