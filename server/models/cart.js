const mongoose    = require ('mongoose')
const Schema      = mongoose.Schema
const cartSchema  = new mongoose.Schema({
  itemList:[{type:Schema.Types.ObjectId,ref:"Item"}]
})

var Cart = mongoose.model('Item',cartSchema)

module.exports = Cart
