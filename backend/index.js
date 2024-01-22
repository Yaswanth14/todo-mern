const express = require("express");
const app = express();

app.use(express.json());

app.post("/todo", (req, res)=>{

})

app.get("todos", (req, res)=>{

})

app.put("/completed", (req, res)=>{

})

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})