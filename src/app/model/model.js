var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema ({
    email: { type : String, required: true , unique: true},
    name: { type : String},
    password: { type: String, required: true },
    role: {type: Number }
});

var seriesSchema = new Schema ({
    seriesName: { type : String, unique: true  },
    genre: { type : String},
    description: { type : String},
   
});

var seasonsSchema = new Schema ({
    seasonNo: { type : Number, unique: true  },
    seriesName: { type : String},
    description: { type : String},
   
});

var episodesSchema = new Schema ({
    episodeNo: { type : Number, unique: true  },
    seriesName: { type : String},
    seasonNo: { type : Number},
    description: { type : String},
   
});

var moviesSchema = new Schema ({
    movieName: { type : String, unique: true  },
    genre: { type : String},
    description: { type : String},
   
});

var User =mongoose.model('userinfo',userSchema);
var Series =mongoose.model('seriesinfo',seriesSchema);
var Seasons =mongoose.model('seasonsinfo',seasonsSchema);
var Episodes =mongoose.model('episodesinfo',episodesSchema);
var Movies =mongoose.model('moviesinfo',moviesSchema);
module.exports = User, Series, Seasons, Episodes, Movies; 