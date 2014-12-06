# <b>Node.js</b>

##### Day 1:
We worked on a few different things:
 - First of all, create a workspace in C9:
    - Click create workspace --> Clone from URL --> Click Node.js in the top left hand corner and copy and paste https://github.com/TJDevClub/node.git into the text-box
    - Start editing the workspace
 -  Make the app and set it up (do this in the terminal):
    - `mkdir nodeapp`
    - `cd nodeapp`
    - `touch app.js`
    - `npm install express.io`
 - Open up app.js and paste this in:
 

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
    
 - To run the code press the run button and click the link that says "your code is running at: "