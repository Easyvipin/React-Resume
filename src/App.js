import MainBar from "./Component/MainBar";
import SideBar from "./Component/SideBar";
import "./styles/main.scss";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Intro from "./Component/Intro";

function App() {
  return (
    <Router>
      <div className="App">
        <Intro />
        {/* <div className="content"> <SideBar />
        <MainBar /> </div>*/}
      </div>
    </Router>
  );
}

export default App;
