import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FetchExample from "./Fetch";
import FetchExample2 from "./Fetch2";
import CompleteTodoList from "./CompleteTodoList";
import Array from "./Array";
import TailWindCSS from "./TailwindCSS";
import GetUser from "./GetUser";
import ModuleCSS from "./ModuleCSS";
import ArrayObject from "./ArrayObject";
import Planets from "./Planets";
import State from "./State";
import TodoList from "./ToDoList";
import Lifecycle from "./Lifecycle";
import { Navbar } from "./RouterDomPages/Navbar";
import UseParams from "./UseParams";

function RouterDom() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<FetchExample />} />
          <Route path="/useParams/" element={<UseParams />} />
          <Route path="/useParams/:username" element={<UseParams />} />
          <Route path="/FetchExample2" element={<FetchExample2 />} />
          <Route path="/CompleteTodoList" element={<CompleteTodoList />} />
          <Route path="/Array" element={<Array />} />
          <Route path="/TailWind" element={<TailWindCSS />} />
          <Route path="/GetUser" element={<GetUser />} />
          <Route path="/ModuleCSS" element={<ModuleCSS />} />
          <Route path="/ArrayObject" element={<ArrayObject />} />
          <Route path="/Planets" element={<Planets />} />
          <Route path="/State" element={<State />} />
          <Route path="/TodoList" element={<TodoList />} />
          <Route path="/Lifecycle" element={<Lifecycle />} />
          <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
        </Routes>
      </Router>
    </div>
  );
}
export default RouterDom;
