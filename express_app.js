
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const todoController = require('./controllers/todoController');
const server = express();
const mongo_db_url ='';
const mongodb_db_url="";

const PORT=process.env.PORT|| 4000;

server.use(express.json());

server.get('/',function(req,res){
    res.status(200).json({
        success:true,message:"welcome this is my todo app"
    })
})
server.get('/todos', todoController.getAllTodos);
server.get('/todos/:id', todoController.getTodoById);

server.post('/todos',todoController.insertTodo);
server.put('/todos/:id',  todoController.updateTodoById);
server.delete('/todos/:id', todoController.deleteTodoById);

server.listen(PORT, function(){
    console.log('Server has started to run in express');
    mongoose.connect(process.env.LOCAL_URL)
    .then(function(){
        console.log('DB is connected');

    })
    
    .catch(function(error){
        console.log('DB is not connected:',error.message);

    });
});