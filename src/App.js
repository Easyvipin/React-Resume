import MainBar from "./Component/MainBar";
import SideBar from "./Component/SideBar";
import "./styles/main.scss";
import hat from "./Images/hat-512.png";

function App() {
  return (
    <div className="App">
      <SideBar />
      <MainBar />
    </div>
  );
}

export default App;
