const express = require('express');
const router = express.Router();
const Tvchannels = require('../../schemas/TvChannel');


router.get('/', (req,res) => {
    Tvchannels.find({})
        .exec()
        .then(tvchannels =>res.json(tvchannels))
        .catch(err => res.send(err))
});


module.exports = router;