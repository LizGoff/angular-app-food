const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Foods = require('../models/food.schema');
const dataFromTheDatabase = require('../module/foodDataBase');

router.get('/', (req, res) => {

    // ------- database read or find ------ //

    Foods.find({})
        .then((dataFromTheDatabase) => {
            console.log('data from database', dataFromTheDatabase);
            res.send(dataFromTheDatabase);
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
    Foods.create(foodToAdd)
        .then((dataFromTheDatabase) => {
            console.log('data to database', dataFromTheDatabase);
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('error', error);
            res.sendStatus(500);
        });
});


module.exports = router;