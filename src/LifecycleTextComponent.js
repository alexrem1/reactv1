import React from "react";
import { useState, useEffect } from "react";

export const LifecycleTextComponent = (props) => {
  const [text, setText] = useState("");

  //if you want to excute an action only once when the component mounts, array must be empty [] eg mounted lifecycle
  //if you want to trigger an action when a specific state changes/many different states changes put state inside eg [text] eg updating lifecycle
  useEffect(() => {
    console.log("component mounted");

    return () => {
      console.log("component unmounted");
    };
  }, []);

  return (
    <div>
      <input
        onChange={(event) => {
          setText(event.target.value);
        }}
      />

      <h1>{text}</h1>
    </div>
  );
};
