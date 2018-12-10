const mongoose = require('mongoose')
const bcrypt   = require('bcryptjs')
const Schema      = mongoose.Schema
var userSchema = new mongoose.Schema({
  name      : String ,
  email     : String ,
  password  : String ,
  role      : String ,
  cart      :{type:Schema.Types.ObjectId,ref:"Cart"}
})
userSchema.pre('save',function(next){
  const salt = bcrypt.genSaltSync(10)
  this.password = bcrypt.hashSync(this.password,salt)
  next()
})

var User = mongoose.model('User',userSchema)
module.exports = User
