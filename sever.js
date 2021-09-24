const express = require('express');
require('dotenv').config();
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const jwksClient = require('jwks-rsa');
const { request, response } = require('express');
const PORT = process.env.PORT;
const MONGO_DB_URL = process.env.MONGO_DB_URL;
const JWKSURI = process.env.JWKSURI
const { verifyToken } = require('./controllers/auth.controller')
mongoose.connect(`${MONGO_DB_URL}/Stop-And-Shop`, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to database ')
    })
    .catch((err) => {
        console.error(`Error connecting to the database. \n${err}`);
    });
app.use(cors());


app.get('/', (req, res) => res.send("<h1> Welcome to our server 😊<h1>"))
app.get('/verify-token', verifyToken)
app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
})