//var proxy = require('express-http-proxy');
var proxy = require('http-proxy-middleware');
const express = require('express');
const path = require('path');
const app = express();
// Run the app by serving the static files
// in the dist directory

app.use(express.static(__dirname + '/dist'));
app.use('/api', proxy({target: 'https://roots-api.herokuapp.com/api', changeOrigin:false}));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

//app.use('/api', proxy('https://xensedash-db.herokuapp.com'));
//app.use('/api', proxy('http://localhost:3000'));
// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 4200);
