const express = require('express');
const authCtrl = require('../../controller/auth.controller');

const router = express.Router();

router.route('/login').get((req, res) => res.render('login.ejs'));

router.route('/profile').get(authCtrl.authenticate, (req, res) => {
    // res.send('you are logged in, this is your profile - ' + req.user.username);
    res.status(200).render('profile.ejs', {user: req.user});
})

router.route('/').get(authCtrl.authenticate, (req, res) => {
    res.status(200).render('index.ejs', {user: req.user});
})

module.exports = router;