var http =  require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'content-Type':'text/html'});
    res.end('Hello World!');
}).listen(4840);