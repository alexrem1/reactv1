import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";

//js way
fetch("https://catfact.ninja/fact")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });

function FetchExample() {
  const [catfact, setCatfact] = useState("");

  const fetchCatFact = () => {
    axios.get("https://catfact.ninja/fact").then((res) => {
      // console.log(res.data);
      setCatfact(res.data.fact);
    });
  };

  // this way fetches data twice
  useEffect(() => {
    fetchCatFact();
    // return () => {
    //   second
    // }
  }, []);

  return (
    <div className="App">
      <p>Fetch Example</p>
      <button onClick={fetchCatFact}>Generate Cat Fact</button>
      <p>{catfact}</p>
    </div>
  );
}
export default FetchExample;
