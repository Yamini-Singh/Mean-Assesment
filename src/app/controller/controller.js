var mongoose = require('mongoose');
var User = mongoose.model('userinfo');
var Series= mongoose.model('seriesinfo');
var Seasons= mongoose.model('seasonsinfo');
var Episodes= mongoose.model('episodesinfo');
var Movies= mongoose.model('moviesinfo');

exports.getUser = (req,res) => {
    var email = req.params.email;
    User.findOne({email: email}, (error, response) => {
        if (error) {
            return res.json(req, res, error);
        }
        res.json(response);
    });
} 
exports.createUser = (req, res) => {
    var user = new User({
        email: req.body.email,
        name: req.body.name,
        role: 1,
        password: req.body.password
    });
    user.save((error, response) => {
        if (error) {
             res.json(error);
        }
        else {
            res.json({
                success: true,
                body: response
            });
        }
    });
} 

