import { useEffect, useState } from "react";

export function Todos({todos}){

    const [id, setId] = useState("");

    useEffect(() => {
        // This effect will run whenever `id` changes
    
          fetch("http://localhost:3000/completed", {
            method: "PUT",
            body: JSON.stringify({
              id: id
            }),
            headers: {
              "Content-Type": "application/json"
            }
            })
            .then(async function (res) {
              const json = await res.json();
              alert("Todo updated");
            });
        }, [id]);

    return <div>
        {todos.map(function(todo){
            return <div key={todo._id}>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button onClick={async ()=>{
                    setId(todo._id);
                }
                 }>{todo.completed == true ? "Completed" : "Complete"}
                 </button>
            </div>
        })}
    </div>
}