import { useCallback, useState } from "react";
import UseCallbackChildComponent from "./RouterDomPages/UseCallbackChildComponent";

//we want to access the function not value
export default function UseCallbackExample() {
  const [data, setData] = useState("Dog");
  const [toggle, setToggle] = useState(false);

  const returnComment = useCallback(
    (name) => {
      return data + name;
    },
    [data]
  );

  return (
    <div className="App">
      <UseCallbackChildComponent returnComment={returnComment} />
      <br />
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle
      </button>
      <br />
      {toggle && <h1>toggle</h1>}
    </div>
  );
}
