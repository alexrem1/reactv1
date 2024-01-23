import { useRef } from "react";

export const CompleteTodoListAddTask = (props) => {
  const inputRef = useRef(null);

  return (
    <div className="addTask">
      <input type="text" ref={inputRef} onChange={props.handleInputChange} />
      <button
        onClick={() => {
          props.addTask();
          inputRef.current.value = "";
          inputRef.current.focus();
        }}
      >
        Add task
      </button>
    </div>
  );
};
