// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var hotelTaxSchema = new Schema({
  name: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  employe: Boolean,
  location: String,
  meta: {
    birthDate:  Date,
    companyNumber : String,
    directorName :String,
    bussinessRegistrationNumber:String,
    name: String,
    address:  String,
    phoneNumber:  String,
  },
  created_at: Date,
  updated_at: Date
});

var User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;
