const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

const Todo = require("../model/todo.model");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// parse application/json
app.use(bodyParser.json());





const control =    
function(req,res){
    Todo.find(function(err, foundlist){
        if(!err){
            res.send(foundlist);
        }else{
            res.send(err);
        }
    } )
    
}

// var posControl =   function(req, res){
   
//     res.send("hello world");
//     console.log(req.body.description);

//     const newlist = Todo ({
//         title: req.body.title,
//         description: req.body.description,
//         dueDate: req.body.dueDate,
//     });


//     newlist.save(function(err){
//         if(!err){
//             console.log("Successfully added a new List")
//         }else{
//             console.log("Failure");
//         }
//     });

//     }





module.exports = control;

// module.exports = posControl;
