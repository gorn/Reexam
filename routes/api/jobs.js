const express = require('express');
const router = express.Router();

const Albi = require('../../schemas/Jobs');
const authentication = require('../../authentication');

router.get('/', (req, res) =>{
    Albi.find({})
        .populate('category')
        .populate('area')
        .exec()
            .then(albi =>res.json(albi))
            .catch(err => res.send(err))
});

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