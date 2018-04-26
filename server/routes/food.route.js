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

        })
        .catch((error) => {
            console.log('error with Food.find', error);
            res.sendStatus(500);
        });

});

router.post('/', (req, res) => {

    // ------- database read or find ------ //
    const addNewFood = req.body;

    Food.create(addNewFood)
        .then((dataFromTheDatabase) => {
            console.log('data to database', dataFromTheDatabase);
            res.post(dataFromTheDatabase);

        })
        .catch((error) => {
            console.log('error with Food.find', error);
            res.sendStatus(500);
        });

});


module.exports = router;