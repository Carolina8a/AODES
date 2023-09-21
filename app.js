const express = require('express');
const router = require('./public/routes/route.js')

const app = express();
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(router);



app.listen(3000, (error) =>{
	if(!error)
		console.log("Server is Successfully Running, and App is listening on port "+ 3000)
	else
		console.log("Error occurred, server can't start", error);
	}
)
