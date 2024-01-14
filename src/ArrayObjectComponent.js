import "./App.css";

export const ArrayObjectComponent = (props) => {
  // const users = [
  //   { name: "Alex", age: 23 },
  //   { name: "Alex2", age: 28 },
  //   { name: "Alex3", age: 234 },
  // ];
  // return (
  //   <div>
  //     {users.map((user, key) => {
  return (
    <div className="App">
      {props.name} {props.age}
    </div>
    // <div>
    //   {user.name} {user.age}
    // </div>
  );
  //     })}
  //   </div>
  // );
};
