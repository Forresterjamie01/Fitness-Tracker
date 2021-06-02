var app = require("express").Router()
var db = require("../models/exercise")

app.get("/api/workouts",function(req,res){
    db.find()
    .then(function(data){
        console.log("GET route",data)
        res.json(data)
    })
})

app.put("/api/workouts/:id",function(req,res){
    db.findByIdAndUpdate(req.params.id,{$push:{exercises:req.body}},{new:true})
    .then(function(data){
        console.log("PUT route",data)
        res.json(data)
    })
})

app.put("/api/workouts",function(req,res){
    db.find()
    .then(function(data){
        console.log("POST route",data)
        res.json(data)
    })
})