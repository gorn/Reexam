const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AreaSchema = new Schema({
    name: {type:String},
    namePath : {type:String}
});
module.exports = Area = mongoose.model('area', AreaSchema);