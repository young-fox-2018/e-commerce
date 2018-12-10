const categorymodel   = require ('../models/category')
const usermodel       = require ('../models/user')
const itemmodel       = require ('../models/item')

module.exports= {
  create:function(req,res){
    let cart = {

    }
    Model.create(cart)
      .then(function(cart){
        res.status(200).json({
          data:cart
        })
      })
      .catch(function(err){
        res.status(400).json({
          message:err.message
        })
      })

  },
  findall:function(req,res){
    Model .find({})
          .then(function(cart){
            res.status(200).json({
              cart
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
  }
  // ,
  // update:function(req,res){
  //   itemmodel .findByIdAndUpdate(req.body._id,{
  //     title:req.body.title
  //   },function(err,data){
  //     if (err) res.status(400).json({err:err.message})
  //     else{
  //       res.status(200).json({data:data.data})
  //     }
  //   })
  // }
}
