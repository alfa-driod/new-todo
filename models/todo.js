const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    title: {
        type:String,
        required:true,
        default:'no title'
    },
    description: {
        type:String,
        required:true,
        default:'no description'
    },
    deadline: {
        type:Date,
        required:true,
        default:'no deadline'
    },
    isCompleted: {
        type:Boolean,
        default:false,
        
    },
},    {timestamps: true});

const todo = mongoose.model('todo', todoSchema);
module.exports = todo;