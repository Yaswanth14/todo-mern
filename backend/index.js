const express = require("express");
const app = express();
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");

app.use(express.json());
app.use(cors());
//{   origin: "http://localhost:5173"  }

app.post("/todo", async (req, res)=>{
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            message: "You send a wrong input"
        })
        return;
    }

    try{
        await todo.create({
            title: createPayload.title,
            description: createPayload.description,
            completed: false
        })

        res.json({
            message: "Todo created"
        });
    } catch(e){
        console.log('Error occured in todo create');
    }
})

app.get("/todos", async (req, res)=>{

    try{
        const todos = await todo.find({});
        res.json({
            todos
        });
    } catch(e){
        console.log('Error occured in getting todos');
    }
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
    
    try{
        const id = req.body.id;
        const element = await todo.findOne({_id: id});
        const status = await element.completed;
        if(status == true)
        {
            await todo.updateOne({
                _id: req.body.id
            }, {
                completed: false
            });
        
            res.json({
                message: "Marked as incomplete"
            });
        }
        else{
            await todo.updateOne({
                _id: req.body.id
            }, {
                completed: true
            });
        
            res.json({
                message: "Marked as complete"
            });
        }
    }
    catch(e){
        console.log('Error occured in completed');
    }
});

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})