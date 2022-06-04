import React from "react";
import { Button, Form } from 'react-bootstrap';
import './styles.scss';

const PetitionSearchbar = () => {
    return (
        <div className="searchbar">
            <Form.Control type="text" placeholder="Buscar petición" />
            <Form.Select>
                <option value='all'>Todas</option>
                <option value='mine'>Que he hecho</option>
                <option value='notMine'>Que me han hecho</option>
            </Form.Select>
            <Form.Select>
                <option value='timeOrder'>Recientes primero</option>
                <option value='textOrder'>Ordenar por nombre</option>
            </Form.Select>
            <Button onClick={() => { }}>Buscar</Button>
        </div>
    )
}

export default PetitionSearchbar;
