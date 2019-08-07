const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProgramsSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    first: {type: Date, required: true},
    next: {type: Date, required: true},
    tvchannel: {type: Schema.Types.ObjectId, ref:'tvchannel'},
    favorite: {type: Schema.Types.ObjectId, ref:'favorite'}
});
module.exports = Programs = mongoose.model('programs', ProgramsSchema);

