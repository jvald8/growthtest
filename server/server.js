var path = require('path');
var express = require('express');

var app = express();

var staticPath = path.resolve('../growthtest/dist');
console.log(staticPath)
app.use(express.static(staticPath));

app.listen(3000, function() {
  console.log('listening');
});
