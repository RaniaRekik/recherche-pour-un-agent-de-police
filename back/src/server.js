const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes =require('./routes');
const path = require("path");


const app = express()
const PORT = process.env.PORT || 8000

app.use(cors())
app.use(express.json())

if (process.NODE_ENV !== 'production') {
	require('dotenv').config()
}

app.get('/register', (req, res) => {
	res.send('Welcome to Register \n')
})

if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config()
}
//mongoose configuration


	app.use("/files", express.static(path.resolve(__dirname, "..", "files")))
	app.use(routes);
	
app.listen(PORT, () => {
	console.log(`Listening on ${PORT}`)
})