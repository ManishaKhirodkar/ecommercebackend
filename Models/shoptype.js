const mongoose = require('mongoose');

const Schema =mongoose.Schema;

const shoptypeSchema = new Schema({
    name:{
        type:String,
        required: true

    },
    shop_type:{
        type:Number,
        required:true
    }
})

module.exports=mongoose.model('shoptype', shoptypeSchema,'shoptypes');