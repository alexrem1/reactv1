import "./App.css";

function Array() {
  const names = ["Alex", "Jake", "Jessica", "Mike", "Dustin"];

  return (
    <div className="App">
      <h1>Array example</h1>
      {names.map((value, key) => {
        return <p key={key}>{value}</p>;
      })}
    </div>
  );
}

export default Array;
