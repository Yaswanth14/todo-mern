const express = require("express");
const app = express();
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");

app.use(express.json());

app.post("/todo", async (req, res)=>{
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            message: "You send a wrong input"
        })
        return;
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        message: "Todo created"
    });
})

app.get("/todos", async (req, res)=>{
    const todos = await todo.find({});
    res.json({
        todos
    });
})

app.put("/completed", async (req, res)=>{
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);
    if(!parsePayload.success){
        res.status(411).json({
            message: "You send a wrong input"
        })
        return;
    }
    await todo.updateOne({
        _id: req.body.id
    }, {
        completed: true
    });

    res.json({
        message: "Marked as complete"
    });
});

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})