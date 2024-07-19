const { db }= require("../db");

class TodoRepository {
    constructor() {
        this.todoList=db;
    }

    create(todoText) {
        let todoLen=this.todoList.todos.length
        this.todoList.todos.push({
            text:todoText,
            id:todoLen
        });
        return this.todoList; 
    }

    async getTodo(id) {
        let todos=this.todoList.todos;
        for(let i=0;i<todos.length;i++) {
            if(todos[i].id==id) {
                console.log(todos[i]);
                return await todos[i];
            }
        }
    }

    async getAllTodos() {
        return this.todoList;
    }
}

const todoRepository=new TodoRepository();

module.exports=todoRepository;