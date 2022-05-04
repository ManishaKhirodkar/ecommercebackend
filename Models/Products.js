const mongoose = require('mongoose');

const Schema =mongoose.Schema;

const productSchema = new Schema({
    name:{
        type:String,
        required: true

    },
    shopId:{
        type:Number,
        required:true
    },
    shoptype_id:{
        type:Number,
        required:true
    },
    brand:{
        type:String,
        required:true
    },
    occasion_id:{
        type:Number,
        required:true
    },
});

module.exports=mongoose.model('product', productSchema,'products');