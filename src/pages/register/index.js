import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { getRandomImage } from "../utils";
import RegisterForm from "../../components/register-form/register-form";
import "./styles.scss";

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    name: '',
  });
  const [error, setError] = useState();

  const handleRegister = () => {
    setError('');
    const backUser = {
      userName: user.name,
      userEmail: user.email,
      userNick: user.username,
      userPassword: user.password,
      userImage: getRandomImage('avatar'),
    };

    axios
      .post('http://localhost:3001/users/register', backUser)
      .then((response) => {
        const { data } = response;
        localStorage.setItem('user', data._id);
        localStorage.setItem('userInfo', JSON.stringify(data));
        navigate('/');
      })
      .catch(() => setError('El email o apodo ya está siendo usado'));
  }

  const handleOnChange = (e) => {
    const clonedUser = { ...user }
    const { id, value } = e.target;
    clonedUser[id] = value
    setUser(clonedUser)
  }

  return (
    <div className="registerBody">
      <RegisterForm handleRegister={handleRegister} user={user} handleOnChange={handleOnChange} error={error} />
    </div>
  );
};

export default Register;
