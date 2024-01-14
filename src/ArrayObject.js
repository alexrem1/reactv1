import { ArrayObjectComponent } from "./ArrayObjectComponent";

function ArrayObject() {
  const users = [
    { name: "Alex", age: 23 },
    { name: "Alex2", age: 28 },
    { name: "Alex3", age: 234 },
  ];

  return (
    <div>
      {users.map((user, key) => {
        return (
          <ArrayObjectComponent key={key} name={user.name} age={user.age} />
        );
      })}
    </div>
  );
}

export default ArrayObject;
