import Header from "./components/Header";
import Provider from "./Provider";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Provider>
        <Header />
      </Provider>
    </div>
  );
}
