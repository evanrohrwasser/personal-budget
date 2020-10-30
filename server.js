//Budget API

const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const chartModel = require("./models/chart_schema");
app.use(bodyParser.json());
app.use(cors());
app.use('/', express.static('public'));

const port = 3000;

const mongoDBClient = require('mongodb').MongoClient
let url = 'mongodb://localhost:27017/chart';


mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true}) 
    .then(() => {
        console.log("Connected to database");
        chartModel.find({})
        .then((data) => {
            res.json(data);
            mongoose.connection.close()
        })
        .catch((connectionError) => {
            console.log(connectionError)
        })
        .catch((connectionError)=> {
            console.log(connectionError)
        })
    })

   
 
// app.get('/budget', (req, res) => {
//     fetch("./budget.json")
//     .then(function(res){
//         res.send(myBudget)
//     })
   
// });

app.post('/addValues', (req, res) => {
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        var newBudget = {
            id: req.body.id,
            title: req.body.title,
            budget: req.body.budget,
            color: req.body.color
        };
        chartModel.insertMany(newBudget)
        .then((data) => {
            res.json(data);
            mongoose.connection.close();
        })
        .catch((connectionError) => {
            console.log(connectionError)
        });
    })
    .catch((connectionError) => {
        console.log(connectionError)
    });
    });


app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`)
});

// app.get("budget.json", function(json){
//     console.log(myBudget);
// });
    
