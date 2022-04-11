import { Routes, Route, Link } from "react-router";
import "./App.css";
import "./components/Postform";
import Postform from "./components/Postform";
import Postinput from "./components/Postinput";

function App() {
  return (
    <div className="App">
     <Routes>
       <Route path="/" element={<Postform/>}/>
       <Route path="/postinput" element={<Postinput/>}/>
     </Routes>
    </div>
  );
}

export default App;
