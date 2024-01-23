import { useState, createContext } from "react";
import UseContextLoginComponent from "./UseContextLoginComponent";
import UseContextUserComponent from "./UseContextUserComponent";

export const AppContext = createContext(null);

function UseContext() {
  const [username, setUsername] = useState("Alex");

  return (
    <AppContext.Provider className="App" value={{ username, setUsername }}>
      <UseContextLoginComponent />
      <UseContextUserComponent />
    </AppContext.Provider>
  );
}

export default UseContext;
