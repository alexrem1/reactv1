import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import UseReducerExample from "./UseReducer";
import UseRef from "./UseRef";
import UseLayoutEffect from "./UseLayoutEffect";
import UseImperativeHandle from "./UseImperativeHandle";
import UseContext from "./UseContext";
import UseMemo from "./UseMemo";
import UseCallbackExample from "./UseCallback";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function RouterDom() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
      // mutations: false,
    },
  });

  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Router>
          <Navbar />

          <Routes>
            <Route path="/" element={<FetchExample />} />
            <Route path="/useParams/" element={<UseParams />} />
            <Route path="/useRef/" element={<UseRef />} />
            <Route path="/useLayoutEffect/" element={<UseLayoutEffect />} />
            <Route
              path="/UseImperativeHandle/"
              element={<UseImperativeHandle />}
            />
            <Route path="/useParams/:username" element={<UseParams />} />
            <Route path="/useContext" element={<UseContext />} />
            <Route path="/useMemo" element={<UseMemo />} />
            <Route path="/useCallback" element={<UseCallbackExample />} />
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
            <Route path="/useReducer" element={<UseReducerExample />} />
            <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
}
export default RouterDom;
