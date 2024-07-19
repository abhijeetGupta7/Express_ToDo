const todoRepository = require("../repository/todoRepo");

class TodoService {
    constructor() {

    }

    async create(todoText) {
        return await todoRepository.create(todoText);
    }

    async getTodo(id) {
        return await todoRepository.getTodo(id);
    }

    async getAllTodos() {
        return await todoRepository.getAllTodos();
    }

}

const todoService=new TodoService();

module.exports=todoService;