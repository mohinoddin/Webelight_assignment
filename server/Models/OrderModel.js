const mongoose=require("mongoose")
const OrderSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    order:{
        type:Array,
        required:true
    }
})
const OrderModel=mongoose.model("Order",OrderSchema)
module.exports=OrderModel