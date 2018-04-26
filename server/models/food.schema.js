const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const foodSchema = new Schema({
    foodType: {type: String, required: true },
    deliciousnessLevel: {type: String, required: true },
    isHot: {type: String, required: true}
});

module.exports = mongoose.model('foods', foodSchema);
