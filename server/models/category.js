const mongoose    = require ('mongoose')
const Schema      = mongoose.Schema
const categorySchema  = new mongoose.Schema({
  title:String
})

var Category = mongoose.model('Category',categorySchema)

module.exports = Category
