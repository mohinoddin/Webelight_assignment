const express = require('express')
const mongoose=require("mongoose")
const cors = require('cors');
const userController=require('./Routes/UserRoute')
const orderController=require('./Routes/OrderRoute')
const app = express()

require('dotenv').config();

app.listen(process.env.PORT || 3001, (err) => {
    if (!err) {
        console.log("server is running")
    } else {
        console.log(err)
    }
})


app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())


app.use("/user",userController)

app.use("/order",orderController)

const url=process.env.ATLAS_URI
mongoose.connect(url,(err)=>{
    if(!err){
        console.log("Connected to database");
    }else{
        console.log(err);
    }
})