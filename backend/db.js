const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://yaswanth14333:JGiLaIwoVrSqCFi9@100xdevs.eifljem.mongodb.net/todo_test');

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model("todos", todoSchema);

module.exports = {
    todo
}