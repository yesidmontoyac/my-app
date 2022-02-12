import React, { useEffect, useState } from "react";
import Personaje from "./Personaje";
import axios from "axios";

function Personajes() {
    const [personajes, setPersonajes] = useState ([]);
    useEffect(() => {
        async function request () {
            const res = await axios.get("https://rickandmortyapi.com/api/character")
            setPersonajes(res.data.results)
        }
            request();
}, []);

return (
    <div>
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