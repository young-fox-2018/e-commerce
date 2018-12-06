const itemmodel = require ('../models/item')

module.exports= {
  create:function(req,res){
    let item = {
      title : req.body.title,
      price : req.body.price,
      tags  : req.body.tags,
      stock : req.body.stock,
      src   : req.body.src
    }
    itemmodel .create(item)
              .then(function(data){
                res.status(200).json({
                  message : "Successfully add Item",
                  data    : data
                })
              })
              .catch(function(err){
                res.status(400).json({
                  message:err.message
                })
              })
  },
  findall:function(req,res){
    itemmodel .find({})
              .then(function(allitem){
                res.status(200).json({
                  message   :'Ini adalah semua Item',
                  data      : allitem
                })
              })
              .catch(function(err){
                res.status(400).json({
                  message:err.message
                })
              })
  },
  delete:function(req,res){
    itemmodel .findByIdAndDelete(req.params.id,
    function(err,data){
        if(err) console.log(err);
        else {
          res.status(200).json({msg:"Selamat Anda Telah Berhasil melakukan Delete"})
        }
    })
  },
  findone:function(req,res){
    itemmodel .findById(req.params.id,
    function(err,data){
      if(err) console.log(err);
      else{
        console.log(data)
        res.status(200).json({data:data})
      }
    })
  }


}
