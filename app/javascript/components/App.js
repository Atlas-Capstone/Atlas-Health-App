import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
const App = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home {...props} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
