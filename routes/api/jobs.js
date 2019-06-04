const express = require('express');
const router = express.Router();

const Jobs = require('../../schemas/Jobs');
const authentication = require('../../authentication');

router.get('/', (req, res) =>{
    Jobs.find().then(jobs =>res.json(jobs))
});

router.get('/:id',  (req,res) => {
    Jobs.find({id: req.params.id}, (err, job) =>{
        res.json(job)
    });
});

router.get('/:location', (req, res) =>{
    Jobs.find({location: req.params.location}, (err,jobs) => {
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
       location: req.params.location,
       category: req.params.category},
       (err, jobs) => {
           res.json(jobs)
       })
});

router.post('/post',authentication, (req, res)=>{
    const newJob = req.body;
    const job = new Jobs({
        title: newJob.title,
        company: newJob.company,
        description: newJob.description,
        location: newJob.location,
        category: newJob.category
    });
    job.save();
    res.json({ msg: `You have posted new question`, job: newJob});

});
module.exports = router;