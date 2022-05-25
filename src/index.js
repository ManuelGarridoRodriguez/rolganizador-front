import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/header/header";
import Login from "./pages/login";
import Register from "./pages/register"
import "./index.scss";

ReactDOM.render(
  <>
    <Header />
    <Register />
  </>,
  document.getElementById("root")
);


// FIXME: Register pilla los estilos de login y, si no le pones !important a los estilos de .card, se va al carajo la card