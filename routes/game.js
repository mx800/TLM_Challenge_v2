var express = require('express');
var router = express.Router();

//Permet d'utiliser le model créé
let BuzzwordGroup = require('../models/buzzword');

/* GET Game page. */
router.get('/', function(req, res, next) {
    //Récupère le data
    BuzzwordGroup.find({},function(err,buzzwordGroups){
        if(err){
            console.log(err)
        }
        res.render('game',{buzzwordGroups: buzzwordGroups})
    });
});

module.exports = router;
