const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const users = require('./Users')
const app = express();

const PORT = 4000
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(PORT, (req,res)=>{
console.log('server is running at', PORT)
})
console.log(users)
app.get('/api/users', (req,res)=>{
    res.json(users)
})
app.get('/api/users/:id', (req,res)=>{
    let id = req.params.id
    console.log(id)
    let result = users.filter((item)=>item.id == id)
    res.json(result[0])
})