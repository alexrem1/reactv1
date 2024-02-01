import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <h1>NAVBAR (Router example)</h1>
      <Link to="/">Fetch (Home)</Link>
      <br />
      <Link to="/useParams"> useParams + useNaigate</Link>
      <br />
      <Link to="/useReducer"> useReducer</Link>
      <br />
      <Link to="/useRef"> useRef</Link>
      <br />
      <Link to="/useLayoutEffect"> useLayoutEffect</Link>
      <br />
      <Link to="/UseImperativeHandle"> UseImperativeHandle</Link>
      <br />
      <Link to="/useContext"> useContext</Link>
      <br />
      <Link to="/useMemo"> useMemo</Link>
      <br />
      <Link to="/useCallback"> useCallback</Link>
      <br />
      <Link to="/FetchExample2">Fetch 2</Link>
      <br />
      <Link to="/ReactHookForm">React Hook Form</Link>
      <br />
      <Link to="/CustomHook">Custom Hook</Link>
      <br />
      <Link to="/CompleteTodoList">Complete Todo List</Link>
      <br />
      <Link to="/Array">Array</Link>
      <br />
      <Link to="/Tailwind">Tailwind</Link>
      <br />
      <Link to="/GetUser">Get user</Link>
      <br />
      <Link to="/ModuleCSS">Module CSS</Link>
      <br />
      <Link to="/ArrayObject">Array Object</Link>
      <br />
      <Link to="/Planets">Planets - Conditional rendering</Link>
      <br />
      <Link to="/State">State examples</Link>
      <br />
      <Link to="/TodoList">Basic Todo List</Link>
      <br />
      <Link to="/Lifecycle">Lifecycle</Link>
    </div>
  );
};
