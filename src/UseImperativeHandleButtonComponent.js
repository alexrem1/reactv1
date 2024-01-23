import React, { useState, forwardRef, useImperativeHandle } from "react";

const UseImperativeHandleButtonComponent = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle);
    },
  }));

  return (
    <div>
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Button from Child
      </button>
      <br />
      {toggle && <span>Toggle</span>}
    </div>
  );
});

export default UseImperativeHandleButtonComponent;
