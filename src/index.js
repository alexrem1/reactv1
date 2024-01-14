import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Array from "./Array";
// import TailWindCSS from "./TailwindCSS";
import GetUser from "./GetUser";
import ModuleCSS from "./ModuleCSS";
import ArrayObject from "./ArrayObject";
import Planets from "./Planets";
import State from "./State";
import TodoList from "./ToDoList";
import CompleteTodoList from "./CompleteTodoList";
import Lifecycle from "./Lifecycle";
import FetchExample from "./Fetch";
import FetchExample2 from "./Fetch2";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <div style={{ marginBottom: "50px" }}>
    <App />
    <Array />
    {/* <TailWindCSS /> */}
    <GetUser />
    <ModuleCSS />
    <ArrayObject />
    <Planets />
    <State />
    <TodoList />
    <CompleteTodoList />
    <Lifecycle />
    <FetchExample />
    <FetchExample2 />
  </div>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
