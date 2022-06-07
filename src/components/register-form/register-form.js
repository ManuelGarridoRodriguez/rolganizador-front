import React from "react";
import { Card, Form, Button, Nav, Alert } from "react-bootstrap";
import "./register-form.scss";

const RegisterForm = ({ user, handleOnChange, handleRegister, error }) => (
  <div className="registerCard">
    <Card className="mx-auto">
      <Card.Header>
        Regístrate en el RolGanizador
      </Card.Header>
      <hr />
      {error && <Alert variant="danger" >{error}</Alert>}
      <Card.Body>
        <Form>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Pepe" value={user.name} onChange={handleOnChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="username">
            <Form.Label>Apodo</Form.Label>
            <Form.Control type="text" placeholder="DadoAmante_5_Bandido" value={user.username} onChange={handleOnChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Dirección de correo electrónico</Form.Label>
            <Form.Control type="email" placeholder="dadoamante@roleriñes.com" value={user.email} onChange={handleOnChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Trata que sea segura" value={user.password} onChange={handleOnChange} />
          </Form.Group>
          <Button className="buttonRegister" type="button" onClick={handleRegister}>
            Registrarte
          </Button>
          {" "}
          <Nav.Link href="/login">
            Atrás
          </Nav.Link>
        </Form>
      </Card.Body>
    </Card>
  </div>
);

export default RegisterForm;