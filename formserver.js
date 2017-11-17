const http = require("http");
const fs = require("fs");

http.createServer(function(request, response) {

  response.writeHead(200, {"Content-Type": "text/html"});

  fs.createReadStream("./public/form.html", "UTF-8").pipe(response);

}).listen(3000);

console.log("listening on port 3000...");
