import React from "react";
import Navbar from "./components/Navbar";

import { BrowserRouter } from "react-router-dom";
import Routers from "./Routers";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routers />
    </BrowserRouter>
  );
}

export default App;
