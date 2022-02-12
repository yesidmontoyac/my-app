import react from "react";

function Personaje(props){
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.genero}</p>
            <img src= {props.foto} alt="imagen-personaje" />
        </div>
    );
}
export default Personaje;