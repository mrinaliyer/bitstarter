var express = require('express');

var app = express.createServer(express.logger());

function readIndex(){
    var index = fs.readFileSync('index.html','utf-8');
    return index;
}

app.get('/', function(request, response) {

    var hello = readIndex();
    response.send('Trying to read in index.html');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
