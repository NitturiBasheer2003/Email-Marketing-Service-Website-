import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Emailpage from "./Pages/EmailPage/Emailpage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Emailpage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;