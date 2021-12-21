const todo = require('../models/todo');

function insertTodo(req, res){
   const {title}=req.body;
  
    console.log(title);
    todo.create(req.body)
   .then(function(data){
       res.status(200).json({success:true,message:'Data has been created',data:data});
    })
    .catch(function(error){
        res.status(401).json({success:false,message:'Data has not been created: '+error.message});
    });

}

function updateTodoById(req, res){
const {id}=req.params;
const {isCompleted}=req.body;
todo.findByIdAndUpdate(id,{isCompleted:isCompleted})
.then(function(){
    res.status(200).json({success:true,message:'its been updated'});
 })
 .catch(function(error){
     res.status(401).json({success:false,message:'it is not updated: '+error.message});
 });


}

function deleteTodoById(req, res){
const {id}=req.params;
todo.findByIdAndDelete(id)
todo.create(req.body)
.then(function(data){
    res.status(200).json({success:true,message:'Todo has been deleted'});
 })
 .catch(function(error){
     res.status(401).json({success:false,message:'Todo can not delete: '+error.message});
 });
}

function getTodoById(req, res){
    const {id}=req.params;
    todo.findById(id)
    .then(function(data){
     res.status(200).json({success:true,data:data});
  })
  .catch(function(error){
      res.status(401).json({success:false,message:'Data has not been created: '+error.message});
  });
 


}

function getAllTodos(req, res){
    todo.find({})
    .then(function(data){
        res.status(200).json({success : true,data});
     })
    .catch(function(err){
        res.status(401).json({success:false,error:'Data has not been created'+err.message});
     })

}
module.exports = {
    insertTodo, updateTodoById, deleteTodoById, getTodoById, getAllTodos
}