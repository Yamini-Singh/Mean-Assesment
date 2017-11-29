var mongoose = require('mongoose');
var User = mongoose.model('userinfo');
var Series= mongoose.model('seriesinfo');
var Seasons= mongoose.model('seasonsinfo');
var Episodes= mongoose.model('episodesinfo');
var Movies= mongoose.model('moviesinfo');
let jwt    = require('jsonwebtoken');
bcrypt= require('bcrypt');

exports.createUser = (req, res) => {
    var password=req.body.password;
    var enPassword = bcrypt.hashSync(password,10); 
    var user = new User({
        email: req.body.email,
        name: req.body.name,
        role: 1,
        password: enPassword
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
    var password = req.params.password;
    console.log(password);
    User.findOne({email: email}).exec().then(user=>{
        if(user!== null){
            dataPassword=user.password;
            bcrypt.compare(password, dataPassword, function(err, response) {
                if(response) {
                    var mytoken = jwt.sign({ 
                        email: email,
                        role: user.role            
                    }, 'token');
                      res.json({
                        success: true,
                        token: mytoken
                    });
                } else {
                    res.json({
                        success: false,
                        body: "password does not match"
                    });
                } 
              });
        }
        else
        res.json(
           null
        );
       
    });
} 

exports.addMovie = function (req, res){
    var movies=new Movies({
        movieName: req.body.movieName,
        img:req.body.img,
        genre: req.body.genre,
        description: req.body.description
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

exports.getMovies= function (req,res){
    var genre= req.params.genre;
 Movies.find({},function(err, response){
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

exports.addSeries = function (req, res){
    var series=new Series({
        seriesName: req.body.seriesName,
        img:req.body.img,
        genre: req.body.genre,
        description: req.body.description
      });

   series.save(function(error,response){
       if(error)
       res.json({success: false,
           body: error});
       else{
         
      res.json({sucess: true,
           body: response});
       }

    });
}
 
exports.getSeries= function (req,res){
    var genre= req.params.genre;
 Series.find({},function(err, response){
     if(err)
     res.send(err);
     else
     res.json(response);
    });
}

exports.deleteSeries = function(req, res) {
    var name=req.params.name;
    Series.remove({
       seriesName: name
     }, function(err, task) {
       if (err)
        res.send(err);
       res.json({ 
        success: true,   
        message: ' Series deleted successfully' });
     });
};
    
   