import { useRef } from "react";
import UseImperativeHandleButtonComponent from "./UseImperativeHandleButtonComponent";

function UseImperativeHandle() {
  const buttonRef = useRef(null);

  return (
    <div>
      <button
        onClick={() => {
          buttonRef.current.alterToggle();
        }}
      >
        Button from Parent
      </button>
      <UseImperativeHandleButtonComponent ref={buttonRef} />
    </div>
  );
}

export default UseImperativeHandle;
