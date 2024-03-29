import "./App.css";

function Planets() {
  const planetsArray = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Venus", isGasPlanet: false },
    { name: "Neptune", isGasPlanet: true },
  ];

  return (
    <div className="App">
      {planetsArray.map((planet, key) => {
        return planet.isGasPlanet ? (
          <h1 key={key}>{planet.name + " is a Gas planet"}</h1>
        ) : (
          <h1 key={key}>{planet.name + " isn't a gas planet"} </h1>
        );
      })}
    </div>
  );
}

export default Planets;
