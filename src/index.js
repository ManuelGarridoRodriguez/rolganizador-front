import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import PrivateRoute from "./components/routes/PrivateRoute";
import PublicRoute from "./components/routes/PublicRoute";

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route exact path="/login" element={<PublicRoute><Login /></PublicRoute>} />
      <Route exact path="/register" element={<PublicRoute><Register /></PublicRoute>} />
      <Route exact path="/" element={<PrivateRoute><LandingPage /></PrivateRoute>} />
      <Route exact path="/game/:id" element={<PrivateRoute><GameDetails /></PrivateRoute>} />
      <Route exact path="/new-game" element={<PrivateRoute><NewGame /></PrivateRoute>} />
      <Route exact path="/user-page" element={<PrivateRoute><UserPage /></PrivateRoute>} />
      <Route exact path="/edit-user" element={<PrivateRoute><EditUserPage /></PrivateRoute>} />
      <Route exact path="/petitions" element={<PrivateRoute><Petitions /></PrivateRoute>} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
