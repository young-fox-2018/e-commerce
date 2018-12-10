const Model = require ('../models/category')

module.exports = {
  create:function(req,res){
    let category = {
      title:req.body.title
    }
    Model .create(category)
          .then(function(category){
            res.status(200).json({
              data:category
            })
          })
          .catch(function(err){
            res.status(400).json({
              message:err.message
            })
          })
  },
  delete:function(req,res){
    Model .findByIdAndDelete(req.params.id,
    function(err,data){
        if(err) console.log(err);
        else {
          res.status(200).json({msg:"Selamat Anda Telah Berhasil melakukan Delete"})
        }
    })
  },
  findall:function(req,res){
    Model .find({})
          .then(function(categories){
            res.status(200).json({
              categories
            })
          })
          .catch(function(err){
            res.status(400).json({
              message:err.message
            })
          })
  }
}
