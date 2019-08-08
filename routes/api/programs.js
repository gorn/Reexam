const express = require('express');
const router = express.Router();

const Programs = require('../../schemas/Programs');
const authentication = require('../../authentication');

router.get('/', (req, res) =>{
    Programs.find({})
        .populate('tvchannels')
        .exec()
            .then(Programs =>res.json(Programs))
            .catch(err => res.send(err))
});

router.post('/programs/post', (req, res) => {
    const newPrograms = req.body;
    const programs = new Programs({
        title: newPrograms.title,
        description: newPrograms.description,
        first: newPrograms.first,
        next: newPrograms.next,
        tvchannels: newPrograms.tvchannels
    });
    programs.save();
    res.json({programs: newPrograms})
});


module.exports = router;