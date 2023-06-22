const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    product:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    description:{
        type:String,
        require:true
    },
})

module.exports = mongoose.model('Product', productSchema);