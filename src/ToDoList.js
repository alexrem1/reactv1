import { useState } from "react";
import "./App.css";

function TodoList() {
  //set initial empty array
  const [todoList, setTodoList] = useState([]);

  //set initial input value
  const [newTask, setNewTask] = useState("");
  // get input value
  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    //get old array plus new value
    const newTodoList = [...todoList, newTask];
    setTodoList(newTodoList);
  };

  const deleteTask = (taskName) => {
    setTodoList(todoList.filter((task) => task !== taskName));
    // or
    // setTodoList(todoList.filter((task) => (task === taskName ? false : true)));

    // can condense the below to look like the above eg update state directly
    // const newToDolist = todoList.filter((task) => {
    //   return task === taskName ? false : true;
    //or
    //     return task !== taskName;
    //   });
    //   setTodoList(newToDolist);
  };

  return (
    <div style={{ marginBottom: "40px" }} className="App">
      <h1 className="green">To Do list</h1>
      <div className="addTask">
        <input type="text" onChange={handleInputChange} />
        <button onClick={addTask}>Add task</button>
      </div>

      <div className="list">
        {todoList.map((task, key) => {
          return (
            <h1 key={key}>
              {task} <button onClick={() => deleteTask(task)}>delete</button>
            </h1>
          );
        })}
      </div>
    </div>
  );
}

export default TodoList;
