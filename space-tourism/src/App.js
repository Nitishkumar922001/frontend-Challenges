import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import Crew from "./pages/crew/Crew";
import homeBg from "./assets/home/background-home-desktop.jpg"
import Destination from "./pages/destination/Destination";
import Technology from "./pages/technology/Technology";


function App() {

  return (
    
    <BrowserRouter>
     
        
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/destination" element={<Destination />}></Route>
          <Route path="/crew" element={<Crew></Crew>}></Route>
          <Route path="/technology" element={<Technology></Technology>}></Route>
        </Routes>
     
    </BrowserRouter>
  );
 
}

export default App;
