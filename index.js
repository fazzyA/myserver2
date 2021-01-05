const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { resolveSoa } = require('dns');
const app = express();
const PORT = 4000
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(PORT, (req,res)=>{
console.log('server is running at', PORT)
})
let users = [
    {name:'Faiza',id:1,email:'faz.pak@gmail.com',password:'1111'},
    {name:'Abeer',id:1,email:'abeer@gmail.com',password:'2222'}    
]
//// routes
app.get('/signup',(req,res)=>{
res.sendFile(path.join(__dirname,'registration','signup.html'))
})
app.post('/signup',(req,res)=>{
   // res.send(req.body)
  // console.log(req.body)
  let {email, name, password} = req.body
  let found = users.some((item)=>item.email == email)
  if(found){
      res.send('<h1>User already existed</h1>')
  } else{
      users.push({name,email,password,id:users.length+1})
     // res.send('user added')
     res.sendFile(path.join(__dirname, 'registration','login.html'))
  }

})