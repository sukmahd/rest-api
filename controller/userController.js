'use strict'
const model = require('../models');

const findAllUser = function(req, res){
  model.User.findAll()
  .then(function(rows){
    res.send(rows);
  })
}

const findByIdUser = function(req,res){
  model.User.findOne({
    where:{
      id:req.params.id
    }
  })
  .then(function(row){
    res.send(row);
  })
}
//
const createUser = function(req,res){
  model.User.create({
    name: req.body.name,
    username: req.body.username,
    password: req.body.password,
    access: req.body.access,
    key: req.body.key
  })
  .then(function(){
    res.send('data created')
  })
}

const updateUser = function(req,res){
  model.User.update({
    name: req.body.name,
    username: req.body.username,
    password: req.body.password,
    access: req.body.access,
    key: req.body.key
  },{
    where: {
      id: req.params.id
    }
  })
  .then(function(){
    res.send('data updated')
  })
}

const deleteUser = function(req,res){
  model.User.destroy({
    where:{
      id:req.params.id
    }
  })
  .then(function(){
    res.send('data deleted')
  })
  .catch(function(err){
    res.send(err)
  })
}

const signin = function(req,res){
  model.User.findOne({
    where:{
      username: req.body.username
    }
  })
  .then(function(row){
    if(row.password == req.body.password)
    {
      res.send('berhasil login')
    }
    else
    {
        res.send('pass salah')
    }
  })
  .catch(function(err){

  })
}

const signup = function(req,res){
  model.User.create({
    name: req.body.name,
    username: req.body.username,
    password: req.body.password,
    access: req.body.access,
    key: req.body.key
  })
  .then(function(){
    res.send('signup berhasil')
  })
}

module.exports = {
  findByIdUser,
  findAllUser,
  deleteUser,
  createUser,
  updateUser,
  signup,
  signin
}