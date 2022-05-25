import React from "react";
import { Card, Form, Button } from "react-bootstrap";
import "./styles.scss";

const RegisterForm = () => {
    return (
        <Card className="mx-auto">
            <Card.Header>
                Regístrate en el RolGanizador
            </Card.Header>
            <hr />
            <Card.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Nombre de la cuenta</Form.Label>
                        <Form.Control type="text" placeholder="Elige tu nombre para la web" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Dirección de correo electrónico</Form.Label>
                        <Form.Control type="email" placeholder="Introduce tu correo electrónico" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Introduce tu contraseña" />
                    </Form.Group>
                    <Button className="buttonRegister" type="button">
                        Registrarte
                    </Button>
                    {" "}
                    <Button variant="dark" type="submit">
                        Atrás
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default RegisterForm;