const express = require('express');
const router = express.Router();

const Albi = require('../../schemas/Jobs');

router.get('/', (req, res) =>{
    Albi.find({})
        .populate('category')
        .populate('area')
        .exec()
            .then(albi =>res.json(albi))
            .catch(err => res.send(err))
});


// router.get('/:location/:category', (req, res) =>{
//     Albi.find({location: req.params.location, category: req.params.category},(err, albi)=>{
//         if(err){
//             res.send(err);
//         }
//         res.json({success: true, data: albi});
//     });
// });

router.post('/albi/post', (req, res) => {
    const newAlbi = req.body;
    const albi = new Albi({
        title: newAlbi.title,
        company: newAlbi.company,
        description: newAlbi.description,
        area:newAlbi.area,
        category: newAlbi.category
    });
    albi.save();
    res.json({albi: newAlbi})
});
module.exports = router;