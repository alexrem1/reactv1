import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UseParams() {
  let { username } = useParams();
  let navigate = useNavigate();

  const [name, setName] = useState("");

  return (
    <div className="App">
      <p>Enter parameter for URL change eg useParams</p>
      <input
        placeholder="Enter profile Name"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <br />
      {name.length > 0 && (
        <div>
          <button
            onClick={() => {
              window.location.href = "http://localhost:3000/useParams/" + name;
            }}
          >
            Go to useParam profile
          </button>
          {/* <a href={"/useParams/" + name}>useParams examples</a> */}
        </div>
      )}
      {window.location.href.includes("useParams/") && (
        <div>
          <h1>This is the profile page for {username}</h1>{" "}
          <p>example of useNavigate back to use params</p>
          <button
            onClick={() => {
              navigate("/useParams");
            }}
          >
            Navigate
          </button>
        </div>
      )}
    </div>
  );
}

export default UseParams;
