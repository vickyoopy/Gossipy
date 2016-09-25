var http = require('http');
var fs = require('fs');
var url = require('url');
var koa = require('koa');
var route = require('koa-route'); 

// http.createServer( function (request, response) {  
//    var pathname = url.parse(request.url).pathname;
//    console.log("Request for " + pathname + " received.");
   
//    fs.readFile(pathname.substr(1), function (err, data) {
//       if (err) {
//          console.log(err);
//          response.writeHead(404, {'Content-Type': 'text/html'});
//       }else{	         
//          response.writeHead(200, {'Content-Type': 'text/html'});
//          response.write(data.toString());		
//       }
//       response.end();
//    });   
// }).listen(8002);
var app = koa();

app.use(route.get('/index', function *(){
	this.type = 'text/html; charset=utf-8';
	this.body = yield new Promise((resolve, reject) => {
		fs.readFile('index.html', function (err, data) {
			if (err) {
				console.log(err);
				reject(err);
			}else{
				console.log('success');
				resolve(data);
			}
		});
	});
}));

app.listen(8002);
