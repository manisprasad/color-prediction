import React from "react";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./components/pages/Home";
import Me from "./components/pages/Me";
import Win from "./components/pages/Win";
import Search from "./components/pages/Search";
import Navbar from "./components/layouts/Navbar";
import "./index.css";



const App = () => {

  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Win" element={<Win />} />
        <Route path="/Me" element={<Me />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;