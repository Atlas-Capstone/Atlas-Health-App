import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";


const App = (props) => {
  return (
    <BrowserRouter>
      <Header {...props} />
      <Routes>
        <Route exact path="/" element={<Home {...props} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
