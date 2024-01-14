export const CompleteTodoListDeleteUpdateTask = (props) => {
  return (
    <div style={{ backgroundColor: props.completedTask ? "green" : "red" }}>
      <h1>
        {props.taskName}
        <button onClick={() => !props.completed(props.id)}>Complete</button>
        <button onClick={() => props.deleteTask(props.id)}>delete</button>
      </h1>
    </div>
  );
};
