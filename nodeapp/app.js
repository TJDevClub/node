var express = require('express.io')
var app = express()

app.get('/', function (req, res) {
  res.send('<h1>Hello World!</h1>') //you can send valid html through here
})

var server = app.listen(process.env.PORT, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})