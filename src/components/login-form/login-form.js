import React from "react";
import { Card, Form, Button } from "react-bootstrap";
import './styles.scss';

const LoginForm = () => {
    return (
        <Card className="mx-auto">
            <Card.Header>
                Iniciar sesión en el RolGanizador
            </Card.Header>
            <hr />
            <Card.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Dirección de correo electrónico</Form.Label>
                        <Form.Control type="email" placeholder="Introduce tu correo" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Introduce tu contraseña" />
                    </Form.Group>
                    <Button variant="dark" type="submit">
                        Entrar
                    </Button>
                    <p>o</p>
                    <Button className="buttonRegister" type="button">
                        Registrarte
                    </Button>
                    <a href="#">He olvidado mi contraseña</a>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default LoginForm;