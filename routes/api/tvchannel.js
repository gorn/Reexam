const express = require('express');
const router = express.Router();
const Tvchannel = require('../../schemas/TvChannel');


router.get('/', (req,res) => {
    Tvchannel.find({})
        .exec()
        .then(tvchannel =>res.json(tvchannel))
        .catch(err => res.send(err))
});

router.post('/', (req, res) => {
    const newStations = req.body
    const stations = new Tvchannel ({
        name: newStations.name,
        namePath: newStations.namePath
    });
    stations.save();
    res.json({tvchannel: newStations});
})

module.exports = router;