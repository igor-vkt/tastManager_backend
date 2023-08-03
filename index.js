const express = require('express');
const app = express();
const config = require('./config');
const Task = require('./models/task')
const cors = require('cors');

app.use(cors());

app.use(express.urlencoded({ extended: false }));

config.authenticate()
    .then(function () {
        console.log('database is connected');
    })
    .catch(function () {
        console.log("no connection");
    })




app.get('/tasks', function(req, res){
    Task.findAll()
    .then(function(result){
        res.status(200).send(result);
    })
    .catch(function(error){
        res.status(500).send(error);
    })
})




app.post('/tasks', function(req, res){
    let task_data = req.body;
    Task.create(task_data)
    .then(function(result){
        res.status(200).send(result);
    })
    .catch(function(error){
        res.status(500).send(error);
    })
})










    app.listen(3000, function () {
        console.log('Server runing 3000');
    })