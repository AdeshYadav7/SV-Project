const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const seedDB = require('./seed')
const productRoutes = require('./routes/product')


mongoose.connect('mongodb://127.0.0.1:27017/adesh')
.then(()=>{console.log("DB connected success")})
.catch((err)=>{
    console.log("DB error"); 
console.log(err)
})




app.set('view engine','ejs');
app.set('views',path.join(__dirname , 'views'));
app.use(express.static(path.join(__dirname,'public')));



// seeding database 
//seedDB()

app.use(productRoutes); //so that har incomming request k baad check kia jae
app.listen(8080 , ()=>{
    console.log("server connected at port 8080")
})