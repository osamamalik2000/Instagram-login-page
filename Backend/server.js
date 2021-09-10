const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");


// MongoClient = require('mongodb').MongoClient
let app = express();
//Schema Import
let userModel = require("./user");

// Connection to data base
mongoose.connect('mongodb://localhost/Instagram', {
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
});
// External libraries use
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/', (req, res)=>{
    res.send("App is running!");
})

app.get('/hello', (req, res)=>{
    res.send("Hello World!");
})


app.post('/login', (req, res)=>{
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

let port = 3000;
app.listen(port, ()=>{ console.log(`App is running on ${port}`)});