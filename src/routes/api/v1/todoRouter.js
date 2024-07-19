const express=require('express');
const todoControllers=require("../../../controllers/todoController");

const todoRouter=express.Router();

todoRouter.get("/ping", todoControllers.pingCheck);

todoRouter.post("/", todoControllers.createTodo);

todoRouter.get("/:id", todoControllers.getTodo);

todoRouter.get("/", todoControllers.getAllTodos);

module.exports=todoRouter;