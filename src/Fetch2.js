import { useQuery } from "@tanstack/react-query";
import "./App.css";
import axios from "axios";
import { useState, useRef } from "react";

function FetchExample2() {
  const [name, setName] = useState("");

  const inputRef = useRef();

  const fetchData = async () => {
    try {
      const res = await axios.get(`https://api.agify.io/?name=${name}`);
      return res.data;
      //or
      // return axios
      //   .get(`https://api.agify.io/?name=${name}`)
      //   .then((res) => res.data);
    } catch (error) {
      throw error;
    }
  };

  const {
    data: predictedAge,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["predictedAge"],
    queryFn: fetchData,
    enabled: false, // disable automatic query execution
  });

  console.log(predictedAge);

  if (isError) {
    return <h1>error</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="App">
      <p>Fetch Example 2</p>

      {/* "?" access if not null */}
      {predictedAge ? (
        <>
          <h1>Name: {String(predictedAge?.name)}</h1>
          <h1>Count: {predictedAge?.count}</h1>
          <h1>Predicted Age: {predictedAge?.age}</h1>
        </>
      ) : (
        <p>No data available</p>
      )}
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
