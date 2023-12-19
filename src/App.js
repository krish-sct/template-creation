import Header from "./components/Header";
import Provider from "./Provider";
import "./styles.css";
import Home from "./template/Home";

export default function App() {
  return (
    <div className="App">
      <Provider>
        {/* <Header /> */}
        <Home />
      </Provider>
    </div>
  );
}
