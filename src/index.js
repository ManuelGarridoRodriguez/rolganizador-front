import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header/Header';
import EditUserPage from "./pages/edit-user";
import Login from "./pages/login";
import Register from "./pages/register";
import LandingPage from "./pages/landing";
import GameDetails from "./pages/gameDetails";
import UserPage from "./pages/user-page";
import "./index.scss";
import NewGame from "./pages/new-game";
import Petitions from "./pages/petitions";

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<LandingPage />} />
      <Route path="/game/:id" element={<GameDetails />} />
      <Route path="/new-game" element={<NewGame />} />
      <Route path="/user-page/:id" element={<UserPage />} />
      <Route path="/edit-user/:id" element={<EditUserPage />} />
      <Route path="/petitions/:id" element={<Petitions />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
