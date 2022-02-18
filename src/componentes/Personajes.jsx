import React, { useEffect, useState } from "react";
import Personaje from "./Personaje";
import axios from "axios";

function Personajes() {
    const [pagina, setPagina] = useState();
    const [buscar, setBuscar] = useState(false);
    const [personajes, setPersonajes] = useState ([]);
    useEffect(() => {
        async function request () {
            const res = await axios.get(`https://rickandmortyapi.com/api/character/?page=${pagina}`)
            setPersonajes(res.data.results)
        }
            request();
}, [buscar]);
const handleChange = (e) => {
    setPagina(e.target.value);
  }
  const handleClick = () => {
    setBuscar(!buscar);
  }

return (
    <div>
        <input type="text" value={pagina} onChange={handleChange} placeholder="pagina"/>
        <button onClick={handleClick}>Search</button>
        {personajes.length > 0 ? (
            personajes.map((personaje, index) => (
            <Personaje 
            key={`personaje${index + 1} `}
            name={personaje.name} 
            genero={personaje.gender}
            foto={personaje.image} 
            />
            ))
        ) : (
            <p>Cargando...</p>
        )}
    </div>
);
}
export default Personajes;