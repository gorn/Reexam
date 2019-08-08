const express = require('express');
const router = express.Router();
const Tvchannels = require('../../schemas/TvChannel');


router.get('/', (req,res) => {
    Tvchannels.find({})
        .exec()
        .then(tvchannels =>res.json(tvchannels))
        .catch(err => res.send(err))
});

router.post('/', (req, res) => {
    const newStations = req.body
    const stations = new Tvchannels ({
        name: newStations.name,
        namePath: newStations.namePath
    });
    stations.save();
    res.json({tvchannels: newStations});
})

module.exports = router;