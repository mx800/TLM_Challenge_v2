let mongoose = require('mongoose');

//Crée le shéma
  let buzzwordSchema = mongoose.Schema({
      "buzzword": String,
      "name": String
   });

   //Crée model that uses shema
   let BuzzwordGroup = module.exports = mongoose.model('BuzzwordGroup',buzzwordSchema)