import "./App.css";
import { useState } from "react";
import { LifecycleTextComponent } from "./LifecycleTextComponent";

function Lifecycle() {
  const [showText, setShowText] = useState(false);
  return (
    <div className="App" style={{ marginBottom: "50px" }}>
      <button
        onClick={() => {
          setShowText(!showText);
        }}
      >
        Show Text
      </button>

      {showText && <LifecycleTextComponent />}
    </div>
  );
}
export default Lifecycle;

//mounting : component starting to exist
//update : changing component
//unmounting: component stops existing
