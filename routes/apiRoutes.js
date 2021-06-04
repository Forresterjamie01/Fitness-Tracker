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

app.post("/api/workouts",function(req,res){
    db.create(req.body)
    .then(function(data){
        console.log("POST route",data)
        res.json(data)
    })
})

app.get("/api/workouts/range",function(req,res){
    console.log("Workout Ranges")
    db.find().limit().sort()
    .then(function(data){
        console.log("GET route",data)
        res.json(data)
    })
})


module.exports = app