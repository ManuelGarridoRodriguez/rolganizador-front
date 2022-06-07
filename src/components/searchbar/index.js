import React, { useState } from "react";
import axios from "axios";
import { Button, Form } from 'react-bootstrap';
import './styles.scss';

const Searchbar = ({ endpoint, setElements }) => {
  const [search, setSearch] = useState();
  const handleSearch = () => {
    axios
    .get(`http://localhost:3001/${endpoint}/search?name=${search}`)
    .then((response) => {
      const { data } = response;
      setElements(data);
    })
  };
  const handleOnChange = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  return (
    <div className="searchbar">
      <Form.Control type="text" placeholder="Nombre de partida" value={search} onChange={handleOnChange} />
      <Button type="button" onClick={handleSearch}>Buscar</Button>
    </div>
  )
}

export default Searchbar;
