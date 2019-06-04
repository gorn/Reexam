const express = require('express');
const router = express.Router();

const Jobs = require('../../schemas/Jobs');
const Area = require('../../schemas/Jobs');
const authentication = require('../../authentication');

router.get('/', (req, res) =>{
    Jobs.find({})
        .populate('category')
        .populate('area')
        .exec(jobs =>res.json(jobs))
});

router.get('/:id',  (req,res) => {
    Jobs.find({id: req.params.id}, (err, job) =>{
        res.json(job)
    });
});
router.get('/locations', (req, res) =>{
    Area.find({}, (err,area) => {
        res.json(area)
    })
});

router.get('/:location', (req, res) =>{
    Jobs.find({area: req.params.area}, (err,jobs) => {
        res.json(jobs)
    })
});

router.get('/:category', (req, res) => {
    Jobs.find({category: req.params.category}, (err, jobs)=>{
        res.json(jobs)
    })
});

router.get('/:location/:category', (req, res) =>{
   Jobs.find(
       {
       area: req.params.area,
       category: req.params.category},
       (err, jobs) => {
           res.json(jobs)
       })
});


router.post('/post', (req, res)=>{
    const newJob = req.body;
    const job = new Jobs({
        title: newJob.title,
        company: newJob.company,
        description: newJob.description,
        area: newJob.area,
        category: newJob.category
    });
    job.save();
    res.json({ msg: `You have posted new question`, job: newJob});

});
module.exports = router;