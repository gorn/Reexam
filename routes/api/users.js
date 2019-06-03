const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

const User = require('../../schemas/User');

router.post('/', (req, res) => {
    const { userName, password } = req.body;

    if(!userName || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    User.findOne({ userName })
        .then(user => {
            if(user) return res.status(400).json({ msg: 'User already exists' });

            const newUser = new User({userName, password});

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if(err) throw err;
                    newUser.password = hash;
                    newUser.save()
                        .then(user => {
                            jwt.sign(
                                { id: user.id }, config.get('jwtSecret'), { expiresIn: 3600 },
                                (err, token) => {
                                    if(err) throw err;
                                    res.json({token,
                                        user: {
                                            id: user.id,
                                            userName: user.userName
                                        }
                                    });
                                }
                            )
                        });
                })
            })
        })
});

router.post('/authenticate', (req, res) => {
    const { userName, password } = req.body;

    // Simple validation
    if(!userName || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    // Check for existing user
    User.findOne({ userName })
        .then(user => {
            if(!user) return res.status(400).json({ msg: 'User Does not exist' });

            // Validate password
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

                    jwt.sign(
                        { id: user.id },
                        config.get('jwtSecret'),
                        { expiresIn: 3600 },
                        (err, token) => {
                            if(err) throw err;
                            res.json({
                                token,
                                user: {
                                    id: user.id,
                                    userName: user.userName
                                }
                            });
                        }
                    )
                })
        })
});

module.exports = router;