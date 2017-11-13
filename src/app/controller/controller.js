var mongoose = require('mongoose');
var User = mongoose.model('userinfo');
var Series= mongoose.model('seriesinfo');
var Seasons= mongoose.model('seasonsinfo');
var Episodes= mongoose.model('episodesinfo');
var Movies= mongoose.model('moviesinfo');

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

exports.getUser = (req,res) => {
    var email = req.params.email;
    User.findOne({email: email}, (error, response) => {
        if (error) {
            return res.json(req, res, error);
        }
        res.json(response);
    });
} 

exports.addMovie = function (req, res){
    var movies=new Movies({
        movieName: req.body.movieName,
        genre: req.body.genre,
        descriprtion: req.body.description
      });

   movies.save(function(error,response){
       if(error)
       res.json({success: false,
           body: error});
       else{
         
      res.json({sucess: true,
           body: response});
       }

    });
}

exports.getMoviesByGenre= function (req,res){
    var genre= req.params.genre;
 Movies.find({genre:genre},function(err, response){
     if(err)
     res.send(err);
     else
     res.json(response);
    });
}
 
exports.getSeriesByGenre= function (req,res){
    var genre= req.params.genre;
 Series.find({genre:genre},function(err, response){
     if(err)
     res.send(err);
     else
     res.json(response);
    });
}
 

exports.deleteMovie = function(req, res) {
    var name=req.params.name;
     Movies.remove({
       movieName: name
     }, function(err, task) {
       if (err)
         res.send(err);
       res.json({ 
        success: true,   
        message: ' Movie deleted successfully' });
     });
    };

   