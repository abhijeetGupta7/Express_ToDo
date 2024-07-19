const todoService = require("../services/todoServices");

function pingCheck(req,res) {
    return res.send({data:"pong"});
}

async function createTodo(req,res) {
    let todoText=req.body.todoText;
    const response=await todoService.create(todoText);
    return res.status(201).send(response);
}

async function getTodo(req,res) {
    const response=await todoService.getTodo(req.params.id);
    return res.status(200).send({ todo:response });
}

async function getAllTodos(req,res) {
    const response=await todoService.getAllTodos();
    return res.status(200).send(response);
}

module.exports={
    pingCheck,
    createTodo,
    getTodo,
    getAllTodos
};
