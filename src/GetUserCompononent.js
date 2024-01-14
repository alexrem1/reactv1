//best way to use a component inside of project, must be capitalized
// can pass props through
export const GetUserComponent = (props) => {
  const age = 18;
  const dog = true;
  const isGreen = false;
  return (
    <div className="userContainer App">
      <h1>{props.name}</h1>
      <h3>{props.email}</h3>
      <h2>{props.age}</h2>
      {age >= 18 && dog ? (
        <h2 style={{ color: "green" }}>{age} so over age</h2>
      ) : (
        <h2 style={{ color: "yellow" }}>{age} so under age</h2>
      )}

      <h2 style={{ color: isGreen ? "white" : "blue" }}> Has color</h2>
    </div>
  );
};
