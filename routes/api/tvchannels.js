const express = require('express');
const router = express.Router();
const TvChannels = require('../../schemas/TvChannels');

router.get('/', (req, res) =>{
    TvChannels.find({},(err, tvchannel)=>{
        if(err){
            res.send(err);
        }
        res.json({success: true, tvchannels: tvchannel});
    });
});
router.post('/', (req, res) => {
    const newChannels = req.body;
    const channels = new TvChannels ({
        name: newChannels.name,
        namePath: newChannels.name
    });
    channels.save();
    res.json({channels: newChannels})
});

module.exports = router;