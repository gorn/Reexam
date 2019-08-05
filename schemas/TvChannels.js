const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TvChannelSchema = new Schema({
    name: {type:String},
    namePath : {type:String}
});

module.exports = TvChannel = mongoose.model('tvchannel', TvChannelSchema);