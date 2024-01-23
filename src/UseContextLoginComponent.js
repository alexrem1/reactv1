import { useContext, useRef, useState } from "react";
import { AppContext } from "./UseContext";

function UseContextLoginComponent() {
  const { setUsername } = useContext(AppContext);
  const inputRef = useRef(null);

  const [newUsername, setNewUsername] = useState("");

  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        onChange={(e) => {
          setNewUsername(e.target.value);
        }}
      />
      <br />
      <button
        onClick={() => {
          setUsername(newUsername);
          inputRef.current.value = "";
          inputRef.current.focus();
        }}
      >
        Update Name
      </button>
    </div>
  );
}

export default UseContextLoginComponent;
