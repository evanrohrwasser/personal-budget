const mongoose = require('mongoose')

const chartSchema = new mongoose.Schema({
    id:{
        required: true,
        type: Number,
        unique: true
    },
    title: {
        type: String,
        trim: true,
        required: true,
        uppercase: true
    },
   budget:  {
    type: Number, 
    required: true,
    },
    color: {
        required: true,
        type: String,
        unique: true
    }

}, { collection: 'chart'})

module.exports = mongoose.model('chart', chartSchema)