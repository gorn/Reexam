const express = require('express');
const router = express.Router();
const Favorite = require('../../schemas/Favorite');

router.get('/', (req, res) =>{
    Favorite.find({})
        .populate('program')
        .exec()
        .then(program =>res.json(program))
        .catch(err => res.send(err))
});

router.post('/add', (req, res) => {
    const newFavorite = req.body;
    console.log(req.body);
    console.log(newFavorite);
    const favorite = new Favorite ({
        program: newFavorite.program
    });
    favorite.save();
    console.log(favorite);
    res.json({favorite: favorite})
});

module.exports = router;