const express = require('express');
const router = express.Router();
const Category = require('../../schemas/Category');

router.get('/', (req, res) =>{
    Category.find({},(err, category)=>{
        if(err){
            res.send(err);
        }
        res.json({success: true, categories: category});
    });
});

module.exports = router;