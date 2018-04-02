const express = require('express');
const router = express.Router();
const async = require('async');

//Permet d'utiliser le model créé
let BuzzwordGroup = require('../models/buzzword');

router.post('/', (req, res,next)=>{
  //  if(req.body.buzzwords === undefined || req.body.buzzwords ==''){
  //      res.redirect('/game') //N'est plus utilisé, pour information seulement
  //  }
    let param = req.body.buzzwords;
    let buzzwordCollection = []
    if(param[0].length==1){
        buzzwordCollection.push(function (callback) {
            BuzzwordGroup.findById(param, (err, res) => {
                if (err) {
                    console.log(err.message)
                }
                callback(null,  res)
            })
        })
    } else {
        for(let i=0;i< param.length ;i++) {
            buzzwordCollection.push(function (callback) {
                BuzzwordGroup.findById(param[i], (err, res) => {
                    if (err) {
                        console.log(err.message)
                    }
                    callback(null,  res)
                })
            })
        }
    }
    //Fonction asynchrone du Foreach
    async.parallel(buzzwordCollection, function(err,result){
        if (err) {
            console.log(err.message)
        }
        res.render('ninjify',{buzzwords: result})
    })
})


module.exports = router;