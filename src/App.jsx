import React from "react";
import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/Navigation/Navigation";
import Home from "./routes/Home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
