const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProgramsSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    first: {type: Date, required: true},
    next: {type: Date, required: true},
    tvchannel: {type: Schema.Types.ObjectId, ref:'tvchannel'},
    user: {type:Schema.Types.ObjectId, ref: 'user'}
});
module.exports = Programs = mongoose.model('programs', ProgramsSchema);

