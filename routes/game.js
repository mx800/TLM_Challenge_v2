var express = require('express');
var router = express.Router();
let mongodQuery = require('../controller/mongod');

//Permet d'utiliser le model créé
let BuzzwordGroup = require('../models/buzzword');

/* GET Game page. */
router.get('/', function(req, res, next) {

    //  mongodQuery.allBuzzwords();

    //Récupère le data
    BuzzwordGroup.find({},function(err,buzzwordGroups){
        if(err){
            console.log(err)
        }
        res.render('game',{buzzwordGroups: buzzwordGroups})
    });

});

module.exports = router;
