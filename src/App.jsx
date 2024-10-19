import React from "react";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import FormPage from "./Pages/FormPage";
import NotFound from "./Pages/NotFound";
const App = () => {
  return (
    <div className="relative w-screen overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
