import { useState } from "react";

//hooks handle logic, not UI logic
export const useToggle = (initialVal = false) => {
  const [state, setState] = useState(initialVal);

  const toggle = () => {
    setState((prev) => !prev);
  };
  return [state, toggle];
};
