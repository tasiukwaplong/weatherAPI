const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
require('./src/routes')(app);

app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the weather API. Get the logs=.'
}));

const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});

module.exports = app;
