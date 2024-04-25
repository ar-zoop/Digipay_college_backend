const express = require('express')
const cors = require('cors');

const { ServerConfig } = require('./config')
const apiRoutes = require('./routes')

const app = express();

var corsOptions = {
	origin: "http://localhost:3000/"
		};
app.use (cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', apiRoutes)

app.listen(ServerConfig.PORT, () => {
  console.log(`Successfully started the server on PORT: ${ServerConfig.PORT}`)
})