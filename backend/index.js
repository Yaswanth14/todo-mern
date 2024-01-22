const express = require("express");
const app = express();
const { createTodo, updateTodo } = require("./types");

app.use(express.json());

app.post("/todo", (req, res)=>{
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            message: "You send a wrong input"
        })
        return;
    }
    // Put in mongoDB
})

app.get("todos", (req, res)=>{

})

app.put("/completed", (req, res)=>{
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);
    if(!parsePayload.success){
        res.status(411).json({
            message: "You send a wrong input"
        })
        return;
    }
    // Put in mongoDB
})

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})