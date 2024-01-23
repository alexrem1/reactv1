import React, { useEffect } from "react";

function UseCallbackChildComponent({ returnComment }) {
  useEffect(() => {
    console.log("function was called");
  }, [returnComment]);

  return <div>{returnComment(" Alex")}</div>;
}

export default UseCallbackChildComponent;
