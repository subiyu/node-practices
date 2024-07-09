var http = require('http');  //코어 모듈

var port = 9090;
var server = http.createServer(function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    res.end('<h1>Hello World</h1>');
});

server.listen(port, function() {
    console.log('server: starts....[' + port + ']');
})