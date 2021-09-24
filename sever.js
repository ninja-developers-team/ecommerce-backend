const express = require('express');
require('dotenv').config();
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT;
const MONGO_DB_URL = process.env.MONGO_DB_URL;

mongoose.connect(`${MONGO_DB_URL}/Stop-And-Shop`, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to database ')
    })
    .catch((err) => {
        console.error(`Error connecting to the database. \n${err}`);
    });
app.use(cors());


app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
})