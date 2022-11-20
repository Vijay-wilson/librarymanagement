const express = require('express')
const app = express()
const port = 3000
let ejs = require('ejs');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("index"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const emailDB = "admin@gmail.com";
const passwordDB= "123";
app.post("/login",(req,res)=>{
const{email,password}=req.body;
if(email === emailDB && password === passwordDB){
  res.sendFile(__dirname + "/logout.html");
}else{
  res.send("Login failed")
}
});
app.get('/login', (req, res) => {
  res.sendFile(__dirname + "/login.html");
})
app.get('/home', (req, res) => {
  res.sendFile(__dirname + "/home.html");
})
app.get('/books', (req, res) => {
  res.sendFile(__dirname + "/books.html");
})
app.get('/contact', (req, res) => {
  res.sendFile(__dirname + "/contact.html");
})
app.get('/logout', (req, res) => {
  res.sendFile(__dirname + "/logout.html");
})
app.get('/feedback', (req, res) => {
  res.sendFile(__dirname + "/feedback.html");
})

app.listen(port, () => {
  console.log("Library Project")
})