const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();
const Todo = require("../model/todo.model");
const control = require("../controllers/todo.controllers");
const posControl = require("../controllers/todo.controllers")

// app.use(bodyParser.urlencoded({extended: true}));


// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: true })

//all todolist route
router.get("/api/v1/todolist", control);


//new todolist

router.post("/api/v1/todolist", urlencodedParser, function(req, res){
   
    res.send("hello world");
    console.log(req.body.description);

    const newlist = Todo ({
        title:req.body.title,
        description:req.body.description,
        dueDate:req.body.dueDate
    });


    newlist.save(function(err){
        if(!err){
            console.log("Successfully added a new List")
        }else{
            console.log("Failure");
        }
    });

    }
 );

module.exports = router;

