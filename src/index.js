import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header/Header';
import Login from "./pages/login";
import Register from "./pages/register";
import LandingPage from "./pages/landing";
import GameDetails from "./pages/gameDetails";
import "./index.scss";
import NewGame from "./pages/new-game";

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<LandingPage />} />
      <Route path="/game/:id" element={<GameDetails />} />
      <Route path="/new-game" element={<NewGame />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
