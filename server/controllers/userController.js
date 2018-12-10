const usermodel = require('../models/user')
const jwt       = require('jsonwebtoken')
const bcrypt    = require('bcryptjs')
require('dotenv').config()

module.exports= {
  register:function(req,res){
    let user = {
      name:req.body.name,
      email:req.body.email,
      password:req.body.password,
      role:"user"
    }
    usermodel.create(user)
             .then(function(userdata){
               res.status(200).json({
                 data:userdata
               })
             })
             .catch(function(err){
               res.status(400).json({
                 message:err.message
               })
             })
  },
  loginuser:function(req,res){
    let userlogin = {
      email:req.body.email,
      password:req.body.password
    }
    usermodel.findOne({
      email:userlogin.email
    })
             .then(function(logging){
               if(logging===null||logging===undefined){
                 res.status(400).json({
                   msg:"Maaf Anda belom terdaftar silahkan Daftar Dulu"
                 })
               }else{
                 let hasil = bcrypt.compareSync(req.body.password,logging.password)
                 if(true){
                   let decoded  = {
                     name   : logging.name,
                     email  : logging.email
                   }
                   let data     = jwt.sign(decoded,process.env.secret_jwt)
                   res.status(200).json({
                     token  :data,
                     role   : logging.role
                   })
                 }else{
                   res.status(400).json({
                     msg:'maaf pasword anda salah'
                   })
                 }
               }
             })
  },
  loginadmin:function(req,res){
    console.log('masuksiniiiiiiiii')
    usermodel.findOne({
      role:'admin'
    })
             .then(function(login){
               if(login){
                 if(login.password==req.body.password){
                   let coded = {
                     name : login.name
                   }
                   let data = jwt.sign(coded , process.env.secret_jwt)
                   res.status(200).json({
                     token:data
                   })
                 }else{
                   res.status(400).json({
                     msg:'maaf Password Anda Salah'
                   })
                 }
               }
             })
             .catch(function(err){
               console.log(err)
             })
  }
}
