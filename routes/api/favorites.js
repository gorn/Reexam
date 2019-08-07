const express = require('express');
const router = express.Router();

const Favorite = require('../../schemas/Favorite');


router.get('/', (req, res) =>{
    Favorite.find({})
        .populate('program')
        .exec()
        .then(favorite =>res.json(favorite))
        .catch(err => res.send(err))
});

router.put('/add', (req, res) => {
    Favorite.find({ _id: req.params.id }, (err, favorite) => {
        if(err) return console.error(err);
        favorite.program.push(req.body.program);
        favorite.save((err, favorite) => {
            if(err) return console.error(err);
            console.log(favorite);
        });
        res.json(favorite);
    })
});

// router.put('/favorite/delete/:id', async (req, res) => {
//
//     console.log(req.params.id);
//     console.log (req.query.favorite);
//     const  id  = req.params.id;
//     const favorite = req.query.favorite;
//     try {
//         const updatedUser = await User.findByIdAndUpdate(id,
//             { $pull: { favorite: favorite } },
//             { new: true },
//         );
//         console.log(id);
//         console.log('Id:' + id + ', Favorite: '+favorite );
//         res.send(updatedUser);
//     } catch (e) {
//         console.error(e);
//         res.status(500).send('Something went wrong');
//     }
// });


module.exports = router;