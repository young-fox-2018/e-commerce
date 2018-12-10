const mongoose    = require ('mongoose')
const Schema      = mongoose.Schema
const cartSchema  = new mongoose.Schema({
  userid:[{type:Schema.Types.ObjectId,ref:"User"}],
  itemList:[{type:Schema.Types.ObjectId,ref:"Item"}],
  done:Boolean
})

var Cart = mongoose.model('Item',cartSchema)

module.exports = Cart
