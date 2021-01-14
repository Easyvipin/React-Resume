import MainBar from "./Component/MainBar";
import SideBar from "./Component/SideBar";
import "./styles/main.scss";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <SideBar />
        <MainBar />
      </div>
    </Router>
  );
}

export default App;
