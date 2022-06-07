import React from "react";
import './styles.scss';
import { useNavigate } from 'react-router-dom';
import { Navbar, Container, NavDropdown, Button, Nav } from "react-bootstrap";

const Navigator = (props) => {
  const { title, action, titlePhoto } = props;
  const navigate = useNavigate();

  const closeSession = () => {
    localStorage.removeItem('user');
    navigate('/login');
  }

  return (
    <div className="navDiv">
      <Navbar collapseOnSelect>
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Inicio</Nav.Link>
              <NavDropdown title="Partidas" id="basic-nav-dropdown">
                <NavDropdown.Item href="/new-game">Crear partida</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/">Listado de partidas</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/petitions">Peticiones</Nav.Link>
              <NavDropdown title="Usuario" id="basic-nav-dropdown">
                <NavDropdown.Item href="/user-page">Mi perfil</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item><Button className="closeSession" onClick={() => closeSession()}>Cerrar sesión</Button></NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {title && (
        <div className="titleContainer" >
          <h1>{title}</h1>
          <div
            className="imageContainer"
            style={{
              backgroundImage: `linear-gradient(90.16deg, #2C2B39 10.33%, rgba(0, 0, 0, 0) 49.94%), url(${titlePhoto})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          >
            {action && (
              <Button className="actionButton" style={{ backgroundColor: action.actionColor }} onClick={action.actionClick}>{action.actionTitle}</Button>
            )}
          </div>
        </div>
      )}
    </div >
  );
};

export default Navigator;