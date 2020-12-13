http = require("http")
http.createServer(function(q,s){
s.end("Test")
}).listen(80)
