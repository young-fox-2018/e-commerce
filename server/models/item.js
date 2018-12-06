const mongoose  = require('mongoose')
var itemSchema  = new mongoose.Schema({
  title : String,
  price : Number,
  tags  : String,
  stock : Number,
  src   : String
})
var Item = mongoose.model('Item',itemSchema)

module.exports  = Item
