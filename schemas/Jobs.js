const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JobsSchema = new Schema({
    title: {type: String, required: true},
    company: {type: String, required: true},
    description: {type: String, required: true},
    area: {type: Schema.Types.ObjectId, ref:'area'},
    category: {type:Schema.Types.ObjectId, ref: 'category'}
});

module.exports = Jobs = mongoose.model('jobs', JobsSchema);

const AreaSchema = new Schema({
    name: {type:String}
});
module.exports = Area = mongoose.model('area', AreaSchema);

// const areas = [
//     {name: 'Aarhus'},
//     {name: 'Copenhagen'},
//     {name: 'Odense'},
//     {name: 'Aalborg'},
//     {name: 'Esbjerg'},
// ];
// areas.forEach(a => {
//     let area= new Area({
//         name: a.name
//     });
//     area.save()
// });

const CategorySchema = new Schema({
    category: {type:String}
});
module.exports = Category = mongoose.model('category', CategorySchema);