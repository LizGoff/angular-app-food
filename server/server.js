const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');
const foodRouter = require('./routes/food.route');
const bodyParser = require('body-parser');

app.use(express.static('server/public'));
app.use(bodyParser.json()); 
app.use('/food', foodRouter);


    // -------------- Connecting to Mongo start --------------- //
// move this connection to modules/database-connection.js

const databaseUrl = 'mongodb://localhost:27017/kitchen';
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
