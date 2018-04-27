const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const foodRouter = require('./routes/food.route');


app.use(express.static('server/public'));
app.use(bodyParser.json()); 
app.use('/foods', foodRouter);


    // -------------- Connecting to Mongo start --------------- //
// move this connection to modules/database-connection.js


// ------------- Connecting to Mongo end ----------------- //




app.listen(PORT, function () {
    console.log(`listening on port: ${PORT}`)
});
