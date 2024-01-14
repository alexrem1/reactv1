import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function FetchExample2() {
  const [name, setName] = useState("");
  const [predictedAge, setPredictedAge] = useState(null);

  const fetchData = () => {
    name.length > 0 &&
      axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
        setPredictedAge(res.data);
      });
  };

  return (
    <div className="App">
      <br />
      <br />
      {/* "?" access if not null  */}
      <h1>Name: {predictedAge?.name}</h1>
      <h1>Count: {predictedAge?.count}</h1>
      <h1>Predicted Age: {predictedAge?.age}</h1>
      <input
        placeholder="Ex. Alex..."
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <button disabled={!predictedAge?.name} onClick={fetchData}>
        Predict Age
      </button>
    </div>
  );
}
export default FetchExample2;
