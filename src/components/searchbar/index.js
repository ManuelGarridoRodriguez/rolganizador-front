import React from "react";
import { Button, Form } from 'react-bootstrap';
import './styles.scss';

const Searchbar = () => {
  return (
    <div className="searchbar">
      <Form.Control type="text" placeholder="Buscar partida" />
      <Form.Select>
        <option value='all'>Todas</option>
        <option value='mine'>Creadas por mi</option>
        <option value='notMine'>No creadas por mi</option>
      </Form.Select>
      <Form.Select>
        <option value='timeOrder'>Recientes primero</option>
        <option value='textOrder'>Ordenar por nombre</option>
      </Form.Select>
      <Button onClick={() => {}}>Buscar</Button>
    </div>
  )
}

export default Searchbar;
