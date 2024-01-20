import "./App.css";
import { useState } from "react";
import { CompleteTodoListAddTask } from "./CompleteTodoListAddTask";
import { CompleteTodoListDeleteUpdateTask } from "./CompleteTodoListDeleteUpdateTask";

function CompleteTodoList() {
  //To do list 2nd example
  //set initial empty array
  const [todoList, setTodoList] = useState([]);

  //set initial input value
  const [newTask, setNewTask] = useState("");
  // get input value
  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      //grab element in the array before the current one and add 1 to id
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completedTask: false,
    };

    newTask.length > 0 && setTodoList([...todoList, task]);
    //below is strings not object

    console.log(task);

    // //get old array plus new value
    // const newTodoList = [...todoList, newTask];
    // setTodoList(newTodoList);
  };

  //completed
  const completed = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          // change completed boolean to true
          return { ...task, completedTask: true };
        } else {
          // keep the same
          return task;
        }
      })
    );
  };

  //pass function to DeleteTask.js
  const deleteTask = (id) => {
    console.log(id);

    setTodoList(todoList.filter((task) => task.id !== id));
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
      <h1 className="green">Complete To Do list 2</h1>
      <CompleteTodoListAddTask
        handleInputChange={handleInputChange}
        addTask={addTask}
      />

      <div className="list">
        {todoList.map((task, key) => {
          return (
            <CompleteTodoListDeleteUpdateTask
              key={key}
              taskName={task.taskName}
              id={task.id}
              deleteTask={deleteTask}
              completed={completed}
              completedTask={task.completedTask}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CompleteTodoList;
