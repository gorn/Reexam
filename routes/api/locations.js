const express = require('express');
const router = express.Router();
const Area = require('../../schemas/Locations');


router.get('/', (req, res) =>{
    Area.find({},(err, area)=>{
        if(err){
            res.send(err);
        }
        res.json({success: true, data: area});
    });
});

module.exports = router;