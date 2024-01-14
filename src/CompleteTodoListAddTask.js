export const CompleteTodoListAddTask = (props) => {
  return (
    <div className="addTask">
      <input type="text" onChange={props.handleInputChange} />
      <button onClick={props.addTask} disabled={props.newTask}>
        Add task
      </button>
    </div>
  );
};
