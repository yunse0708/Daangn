// App.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/index";
import Trade from "./pages/Trade";
import Job from "./pages/Job";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Trade" element={<Trade />} />
        <Route path="/Job" element={<Job />} />
      </Routes>
    </div>
  );
}

export default App;
