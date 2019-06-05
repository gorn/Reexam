const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AlbiSchema = new Schema({
    title: {type: String, required: true},
    company: {type: String, required: true},
    description: {type: String, required: true},
    area: {type: Schema.Types.ObjectId, ref:'area'},
    category: {type:Schema.Types.ObjectId, ref: 'category'}
});
module.exports = Albi = mongoose.model('albi', AlbiSchema);

