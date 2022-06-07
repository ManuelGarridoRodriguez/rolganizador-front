import React, { useState } from "react";
import axios from "axios";
import LoginForm from "../../components/login-form/Login-form";
import { useNavigate } from 'react-router-dom';
import "./styles.scss";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState();

  const handleOnChange = (e) => {
    const clonedUser = { ...user }
    const { id, value } = e.target;
    user[id] = value
    setUser({ ...clonedUser, ...user })
  };

  const handleRegister = () => {
    setError('');
    const backUser = {
      email: user.email,
      password: user.password,
    };

    axios
      .post('http://localhost:3001/users/login', backUser)
      .then((response) => {
        const { data } = response;
        localStorage.setItem('user', data._id);
        localStorage.setItem('userInfo', JSON.stringify(data));
        navigate('/');
      })
      .catch(() => setError('El email o contraseña son incorrectos'));
  };

  return (
    <div className="loginBody">
      <LoginForm user={user} error={error} handleRegister={handleRegister} handleOnChange={handleOnChange} />
    </div>
  );
};

export default Login;