import { useState } from "react";
import Provider from "./Provider";
// import "./styles.css";
import Home from "./template/Home";
import Login from "./template/Login";

export default function App() {
  const [isLoged, setIsLoged] = useState(false);
  const [role, setRole] = useState("Select User Role");
  return (
    <div className="App">
      <Provider>
        {/* <Header /> */}

        {isLoged ? (
          <Home isLoged={isLoged} role={role} />
        ) : (
          <Login setIsLoged={setIsLoged} role={role} setRole={setRole} />
        )}
      </Provider>
    </div>
  );
}
