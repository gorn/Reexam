const express = require('express');
const router = express.Router();

const Programs = require('../../schemas/Programs');
const authentication = require('../../authentication');

router.get('/', (req, res) =>{
    Programs.find({})
        .populate('user')
        .populate('tvchannel')
        .exec()
            .then(program =>res.json(program))
            .catch(err => res.send(err))
});

router.post('/programs/post', (req, res) => {
    const newPrograms = req.body;
    const programs = new Programs({
        title: newPrograms.title,
        description: newPrograms.description,
        first: newPrograms.first,
        next: newPrograms.next,
        tvchannel: newPrograms.tvchannel
    });
    programs.save();
    res.json({programs: newPrograms})
});


module.exports = router;