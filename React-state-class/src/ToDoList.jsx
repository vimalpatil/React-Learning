import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function ToDoList() {
    let [todos, setTodos] = useState([{ task: "sample-task", id: uuidv4(), isDone: false }]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        //console.log("We have to add new task in todo");
        setTodos((prevTodos) => {
            return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }];
        });
        setNewTodo("");
    }

    let updateTodoValue = (event) => {
        //console.log(event.target.value);
        setNewTodo(event.target.value);
    }
    let deleteTodo = (id) => {
        setTodos((prevtodos) => todos.filter((prevtodos) => prevtodos.id != id));

    }

    let markAllAsDone = () => {
        setTodos((prevTodos) => prevTodos.map((todo) => {
            return {
                ...todo,
                isDone: true,
            };

        })
        )
    }

    let markAsDone = (id) => {
        setTodos((prevTodos) => prevTodos.map((todo) => {
            if (todo.id == id) {
                return {
                    ...todo,
                    isDone: true,
                };
            } else {
                return todo;
            }


        })
        )
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
                        <li id={todo.id} key={todo.id}><span style={todo.isDone ? { textDecorationLine: "line-through" } : ""}>{todo.task}</span>
                            &nbsp;&nbsp;&nbsp;
                            <button onClick={() => deleteTodo(todo.id)}>delete</button>
                            <button onClick={() => markAsDone(todo.id)}>Mark As Done</button>
                            {/* <button onClick={() => TaskDone(todo.id)}>Mark As Done</button> */}
                        </li>
                    ))
                }
            </ul>
            <br /><br />
            <button onClick={markAllAsDone}>Mark All As Done</button>
        </div>


    )
}