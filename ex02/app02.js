var http = require('http');  //코어 모듈
var fs = require('fs');

var port = 9090;
var server = http.createServer(function(req, res) {
    console.log(req.url);

    if(req.url === '/') {
        req.url = '/index.html';
    }

    fs.readFile(__dirname + '/public' + req.url, function(error, data) {  //비동기이므로 콜백이 들어감
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.end(data);
    });
});

server.listen(port, function() {
    console.log('server: starts....[' + port + ']');
})