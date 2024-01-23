import { useQuery } from "@tanstack/react-query";
import "./App.css";
import axios from "axios";
import { useState, useRef } from "react";

function FetchExample2() {
  const [name, setName] = useState("");

  const inputRef = useRef();

  const {
    data: predictedAge,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["cat"],
    queryFn: async () =>
      (await axios.get(`https://api.agify.io/?name=${name}`)).data,
  });

  if (isError) {
    return <h1>error</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="App">
      <p>Fetch Example 2</p>

      {/* "?" access if not null  */}
      <h1>Name: {predictedAge.name}</h1>
      <h1>Count: {predictedAge.count === 0 ? "" : predictedAge.count}</h1>
      <h1>Predicted Age: {predictedAge.age}</h1>
      <input
        ref={inputRef}
        placeholder="Ex. Alex..."
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <button
        onClick={() => {
          refetch();
          inputRef.current.value = "";
          inputRef.current.focus();
        }}
      >
        Predict Age
      </button>
    </div>
  );
}
export default FetchExample2;
