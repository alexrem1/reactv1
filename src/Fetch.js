import axios from "axios";
import "./App.css";
import { useQuery } from "@tanstack/react-query";
import { useGetCat } from "./FetchHook";

// //js way
// fetch("https://catfact.ninja/fact")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   });

function FetchExample() {
  const { catFact, refetchData, isLoading, isError } = useGetCat();

  // if (isError) return;

  // if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className="App">
      <p>Fetch Example</p>
      {isLoading && <h1>Loading...</h1>}
      {isError && <h1>Error...</h1>}
      <button onClick={refetchData}>Generate Cat Fact</button>
      {catFact ? <p>{catFact}</p> : <p>Trying to get data</p>}
    </div>
  );
}
export default FetchExample;
