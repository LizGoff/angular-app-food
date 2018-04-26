const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');

const Food = require("./models/food.schema");

app.use(express.static('server/public'));



app.get('/food', function (req, res) {
    res.send('Food is yummy!');
    });


    // -------------- Connecting to Mongo start --------------- //
// move this connection to modules/database-connection.js

const databaseUrl = 'mongodb://localhost:27017/library';
mongoose.connect(databaseUrl);

mongoose.connection.on('connection', () => {
    console.log(`mongoose connected to ${databaseUrl}`);
});

mongoose.connection.on('error', (error) => {
    console.log('mongoose connection error', error)
});

// ------------- Connecting to Mongo end ----------------- //




app.listen(PORT, function () {
    console.log(`listening on port: ${PORT}`)
});
