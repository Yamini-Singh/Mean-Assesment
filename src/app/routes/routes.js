
var express = require('express');
var router = express.Router();
var controller = require('../controller/controller');


router.route('/v1/createUser')
    .post(controller.createUser);

router.route('/v1/getUser/:email/:password')
    .get(controller.getUser);

router.route('/v1/addMovie')
    .post(controller.addMovie);

router.route('/v1/getMovies')
     .get(controller.getMovies);

router.route('/v1/deleteMovie/:name')
     .delete(controller.deleteMovie);

router.route('/v1/addSeries')
     .post(controller.addSeries);

router.route('/v1/getSeries')
     .get(controller.getSeries);

router.route('/v1/deleteSeries/:name')
     .delete(controller.deleteSeries);

module.exports = router;