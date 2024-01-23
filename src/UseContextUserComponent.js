import { useContext } from "react";
import { AppContext } from "./UseContext";

function UseContextUserComponent() {
  const { username } = useContext(AppContext);
  return (
    <div>
      <h1>User: {username}</h1>
    </div>
  );
}

export default UseContextUserComponent;
