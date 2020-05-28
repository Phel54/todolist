const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

const todoRouter = require("./routes/todo.route");


app.use("/", todoRouter);

app.use(bodyParser.urlencoded({extended: true}));



// const todoSchema = {
//     title: String,
//     description: String,
//     dueDate: String,

// };

// const Todo = mongoose.model("Todo", todoSchema);


////////TARGETING ALL LIST ////////
// app.route("/api/v1/todolist")
// .get(
//     function(req,res){
//         Todo.find(function(err, foundlist){
//             if(!err){
//                 res.send(foundlist);
//             }else{
//                 res.send(err);
//             }
//         } )
        
//     }
  
// )
// .post(
//     function(req, res){
//             console.log(req.body.title);
//             console.log(req.body.description);
//             console.log(req.body.dueDate);

//             const newlist = Todo ({
//                 title:req.body.title,
//                 description: req.body.description,
//                 dueDate: req.body.dueDate,
//             });


//             newlist.save(function(err){
//                 if(!err){
//                     console.log("Successfully added a new List")
//                 }else{
//                     console.log("Failure");
//                 }
//             });

//     }
// )
// .delete(
//     function(req,res){
//         Todo.deleteMany(function(err){
//             if(!err){
//                 console.log("Successfully adeleted all list")
//             }else{
//                 console.log("Failure");
//             }
//         });
//     }
// )
// .put(
//     function(req,res){
//          Todo.update(
//              {   title:req.params.title},
//              {title: req.body.title, 
//                 description: req.body.description, 
//                 dueDate:req.body.dueDate},
//                 {overwrite:true},
//                 function(err){
//                     if(!err){
//                         console.log("Successfully updated the lis")
//                     }else{
//                         console.log("Failure");
//                     }
//                 }
    

                
//          )
//     }
// )






app.listen(3000, function(){
    console.log("server is working");
});
