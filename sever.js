const express = require('express');
require('dotenv').config();
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
app.use(express.json());
const jwt = require('jsonwebtoken')
const jwksClient = require('jwks-rsa');
const { request, response } = require('express');
const { addToCart } = require('./controllers/cart.controller')
const PORT = process.env.PORT;
const MONGO_DB_URL = process.env.MONGO_DB_URL;
const JWKSURI = process.env.JWKSURI
const { verifyToken } = require('./controllers/auth.controller')
mongoose.connect(`$mongodb://Stop-And-Shop:1234@project301-shard-00-00.sscsq.mongodb.net:27017,project301-shard-00-01.sscsq.mongodb.net:27017,project301-shard-00-02.sscsq.mongodb.net:27017/Stop-And-Shop?ssl=true&replicaSet=atlas-xoe1ka-shard-0&authSource=admin&retryWrites=true&w=majority/Stop-And-Shop`, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to database ')
    })
    .catch((err) => {
        console.error(`Error connecting to the database. \n${err}`);
    });
app.use(cors());


app.get('/', (req, res) => res.send("<h1> Welcome to our server 😊<h1>"))
app.get('/verify-token', verifyToken)
app.post('/addtocard', addToCart)
app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`)
})