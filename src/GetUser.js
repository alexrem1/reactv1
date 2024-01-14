import "./App.css";
import { GetUserComponent } from "./GetUserCompononent";

function GetUser() {
  return (
    <div>
      <GetUserComponent name="pedro" email="rem@rem.com" age="20" />
    </div>
  );
}

export default GetUser;
