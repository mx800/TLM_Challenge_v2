
let BuzzwordGroup = require('../models/buzzword'); //Permet d'utiliser le model créé


//All buzzword
exports.allBuzzwords = function(req,res) {
    BuzzwordGroup.find({}, function (err, task) {
        if (err) {
            res.send(err)
        }
        res.json(task)
    })
}


