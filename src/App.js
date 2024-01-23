import { useContext, useState } from "react";
import "./styles.css";
import Home from "./template/Home";
import Login from "./template/Login";
import { Context } from "./Provider";

export default function App() {
  const { isLoged, setIsLoged, role, setRole } = useContext(Context)
  return (
    <div className="App">
      {/* <Header /> */}

      {isLoged ? (
        <Home />
      ) : (
        <Login />
      )}
    </div>
  );
}
