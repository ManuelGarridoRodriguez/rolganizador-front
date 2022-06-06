import React from "react";
import { Card, Form, Button, Nav, Alert } from "react-bootstrap";
import './login-form.scss';

const LoginForm = ({ error, user, handleRegister, handleOnChange }) => {
  return (
    <div className="loginCard">
      <Card className="mx-auto">
        <Card.Header>
          Iniciar sesión en el RolGanizador
        </Card.Header>
        <hr />
        {error && <Alert variant="danger" >{error}</Alert>}
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Dirección de correo electrónico</Form.Label>
              <Form.Control type="email" placeholder="Introduce tu correo" onChange={handleOnChange} value={user.email} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Introduce tu contraseña" onChange={handleOnChange} value={user.password} />
            </Form.Group>
            <div className="buttonsDiv">
              <Button variant="dark" type="button" onClick={handleRegister}>
                Entrar
              </Button>
              <p>o</p>
              <Nav.Link className="buttonRegister" href="/register">
                Registrarte
              </Nav.Link>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LoginForm;