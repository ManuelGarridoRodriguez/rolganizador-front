import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/header/header";
import "./index.scss";
import Register from "./pages/register";

ReactDOM.render(
  <>
    <Header />
    <Register />
  </>,
  document.getElementById("root")
);
