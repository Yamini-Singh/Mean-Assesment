
var express = require('express');
var router = express.Router();
var controller = require('../controller/controller');


router.route('/v1/getUser/:email')
    .get(controller.getUser);

router.route('/v1/createUser')
    .post(controller.createUser);



module.exports = router;