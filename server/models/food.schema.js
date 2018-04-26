const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const foodSchema = new Schema({
    foodType: {type: String, required: true, unique: true },
    deliciousnessLevel: {type: Number, required: true },
    isHot: {type: String, required: true}
});

module.exports = mongoose.model('foods', foodSchema);
