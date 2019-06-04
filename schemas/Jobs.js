const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JobsSchema = new Schema({
    title: {type: String, required: true},
    company: {type: String, required: true},
    description: {type: String, required: true},
    location: {type: String, required: true},
    category: {type:String, required: true}
});

module.exports = Jobs = mongoose.model('jobs', JobsSchema);