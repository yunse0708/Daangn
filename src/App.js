// App.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/index";
import Trade from "./pages/Trade";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Trade" element={<Trade />} />
      </Routes>
    </div>
  );
}

export default App;
