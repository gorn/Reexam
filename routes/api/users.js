const express = require('express');
const router = express.Router();
const config = require('config');
const jwt = require('jsonwebtoken');
const secret = config.get('jwtSecret');
const authentication = require('../../authentication');
const User = require('../../schemas/User');


router.post('/authenticate', function(req, res) {
    const { userName, password } = req.body;
    User.findOne({ userName }, function(err, user) {
        if (err) {
            console.error(err);
            res.status(500)
                .json({
                    error: 'Internal error please try again'
                });
        } else if (!user) {
            res.status(401)
                .json({
                    error: 'Incorrect username or password'
                });
        } else {
            user.isCorrectPassword(password, function(err, same) {
                if (err) {
                    res.status(500)
                        .json({
                            error: 'Internal error please try again'
                        });
                } else if (!same) {
                    res.status(401)
                        .json({
                            error: 'Incorrect email or password'
                        });
                } else {
                    const payload = { userName };
                    const token = jwt.sign(payload, secret, {
                        expiresIn: '1h'
                    });
                    res.cookie('token', token, { httpOnly: true })
                        .sendStatus(200);
                }
            });
        }
    });
});

router.get('/checkToken', authentication, function(req, res) {
    res.sendStatus(200);
});

router.get('/favorite/:id', (req, res) => {
    User.findOne({_id: req.params.id})
        .populate('favorite')
        .exec()
            .then(favorite =>res.json(favorite))
            .catch(err => res.send(err))
});

// router.put('/favorite/:id', async (req, res) => {
//     const { id, favorite } = req.params;
//     try {
//         const updatedUser = await User.findByIdAndUpdate(id,
//             { $push: { favorites: favorite } },
//             { new: true },
//         );
//         res.send(updatedUser);
//     } catch (e) {
//         console.error(e);
//         res.status(500).send('Something went wrong');
//     }
// });

router.put('/favorite/delete/:id', async (req, res) => {
    const { id, favorite } = req.params;
    try {
        const updatedUser = await User.findByIdAndUpdate(id,
            { $pull: { favorites: favorite } },
            { new: true },
        );
        res.send(updatedUser);
    } catch (e) {
        console.error(e);
        res.status(500).send('Something went wrong');
    }
});

router.put('/favorite/:id', (req, res) => {
    User.findOne({ _id: req.params.id }, (err, user) => {
        if(err) return console.error(err);
        user.favorite.push(req.body.favorite);
        user.save((err, user) => {
            if(err) return console.error(err);
            console.log(user);
        });
        res.json(user);
    })
});
// router.put('favorite/delete/:id', (req, res) => {
//     User.findOne({_id: req.params.id}, (err, user) =>{
//         if(err) return console.error(err);
//         user.favorite = user.favorite.filter((x) => x !== req.body.favorite);
//         user.save((err,user) => {
//             if (err) return console.error(err);
//             console.log(user);
//         });
//         res.json(user);
//     })
// });


module.exports = router;