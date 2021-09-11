const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const path = require('path');

// MongoClient = require('mongodb').MongoClient
let app = express();
//Schema Import
let userModel = require("./user");

// Connection to data base
mongoose.connect('mongodb+srv://instagram:instagram@cluster0.qtimt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{useNewUrlParser:true, useCreateIndex:true, useUnifiedTopology:true}, ()=>{
    console.log("mongodb connected")
});
// External libraries use
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));
app.get('*',(req, res)=>{
    res.sendFile(path.join(__dirname, 'public/index.html'));
})

app.get('/api/', (req, res)=>{
    res.send("App is running!");
})

app.post('/api/login', (req, res)=>{
    //  Creating object of our user
    let insert = userModel({"user":req.body.user, "pass":req.body.pass});

    insert.save()
    .then(()=>{
        res.send({msg:"Inserted Successfully"})
    })
    .catch(err=>{
        console.log(err)
        res.send({msg:"Unable to insert right now!"+ JSON.stringify(err, undefined, 2)});
    })
})

let port = process.env.PORT || 8080;

app.listen(port, ()=>{ console.log(`App is running on ${port}`)});