import axios from "axios";
import "./App.css";
import { useQuery } from "@tanstack/react-query";

// //js way
// fetch("https://catfact.ninja/fact")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   });

function FetchExample() {
  const {
    data: catFact,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["cat"],
    queryFn: async () =>
      (await axios.get("https://catfact.ninja/fact")).data.fact,
  });

  if (isError) {
    return <h1>error</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="App">
      <p>Fetch Example</p>
      <button onClick={() => refetch()}>Generate Cat Fact</button>
      <p>{catFact}</p>
    </div>
  );
}
export default FetchExample;
