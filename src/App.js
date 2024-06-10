// App.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/index";
import Trade from "./pages/Trade";
import Job from "./pages/Job";
import Car from "./pages/Car";
import Company from "./pages/Company";
import House from "./pages/House";
import Login from "./components/login"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Trade" element={<Trade />} />
        <Route path="/Job" element={<Job />} />
        <Route path="/Car" element={<Car />} />
        <Route path="/Company" element={<Company />} />
        <Route path="/House" element={<House />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
