import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function ToDoList() {
    let [todos, setTodos] = useState(["Sample Task"]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        //console.log("We have to add new task in todo");
        setTodos([...todos, newTodo]);
        setNewTodo("");
    }

    let updateTodoValue = (event) => {
        //console.log(event.target.value);
        setNewTodo(event.target.value);
    }

    return (
        <div>
            <input placeholder="add a task" value={newTodo} onChange={updateTodoValue}></input>
            <br />
            <button onClick={addNewTask}>Add Task</button>
            <br /><br /><br /><br /><br /><br />
            <hr></hr>
            <h4>Tasks Todo </h4>
            <ul>
                {
                    todos.map((todo) => (
                        <li>{todo}</li>
                    ))
                }
            </ul>
        </div>


    )
}