import React from "react";
import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/Navigation/Navigation";
import Home from "./routes/Home/Home";
import CountryDetailed from "./routes/CountryDetailed/CountryDetailed";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="country" element={<CountryDetailed />} />
      </Route>
    </Routes>
  );
}

export default App;
