const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Food = require('../models/food.schema');

router.get('/', (req, res) => {

    // ------- database read or find ------ //

    Food.find({})
        .then((dataFromTheDatabase) => {
            console.log('data from database', dataFromTheDatabase);
            res.send(dataFromTheDatabase);
            // self.foodList = response.data;

        })
        .catch((error) => {
            console.log('error with Food.find', error);
            res.sendStatus(500);
        });

});

router.post('/', (req, res) => {

    // ------- database read or find ------ //
    // data from client become req.body
    const foodToAdd = req.body;
    Food.create(foodToAdd)
        .then((dataFromTheDatabase) => {
            console.log('data to database', dataFromTheDatabase);
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('error with Food.find', error);
            res.sendStatus(500);
        });

});


module.exports = router;