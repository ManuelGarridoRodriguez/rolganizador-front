import React from "react";
import './styles.scss';
import { Navbar, Container, NavDropdown, Button, Nav } from "react-bootstrap";

const Navigator = (props) => {
    const { title, action, titlePhoto } = props;
    return (
        <div className="navDiv">
            <Navbar collapseOnSelect>
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Inicio</Nav.Link>
                            <NavDropdown title="Partidas" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/create-game">Crear partida</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/game-list">Listado de partidas</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/petitions">Peticiones</Nav.Link>
                            <NavDropdown title="Usuario" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/perfil">Mi perfil</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>Cerrar sesión</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {title && (
                <div style={{ backgroundImage: `url(${titlePhoto})` }}>
                    <h1>{title}</h1>
                    {action && (
                        <div>
                            <Button className={`actionButton ${action.actionColor}`} onClick={action.actionClick}>{action.actionTitle}</Button>
                        </div>
                    )}
                </div>
            )
            }
        </div >
    );
};

export default Navigator;