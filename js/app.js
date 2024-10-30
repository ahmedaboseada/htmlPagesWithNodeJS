const http = require('http');
const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./'));
app.use(express.static('./img'));




const server = http.createServer(app);
server.listen(port, () => {
  console.log('Listening on port ' + port);
})
