const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
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

module.exports = router;