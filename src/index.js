import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Login from "./pages/login";
import Register from "./pages/register";
import "./index.scss";
import LandingPage from "./pages/landing";

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/landing" element={<LandingPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);


// FIXME: Register pilla los estilos de login y, si no le pones !important a los estilos de .card, se va al carajo la card