import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./screen/Home";
import MyProfile from "./components/MyProfile";
export default function Routers() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MyProfile" element={<MyProfile />} />
      </Routes>
    </div>
  );
}




