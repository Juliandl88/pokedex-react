import React from "react";
import { searchPokemon } from "../api";
const { useState } = React;




const Searchbar = () => {
    const [search, setSearch] = useState("");
    const [pokemon, setPokemon] = useState()

    const onChange = (evt) => {
        setSearch(evt.target.value);
    }

    const onClick = async (evt) => {
        const data = await searchPokemon(search);
        setPokemon(data);
    }

    return (
        <div className="searchbar-container">
            <div className="searchbar">
                <input type="text" placeholder="Buscar Pokemon..." onChange={onChange} />
            </div>
            <div className="searchbar-btn">
                <button onClick={onClick}>Buscar</button>
            </div>
            <div>
               {/*  {pokemon && 
                <div>   
                <div>Nombre: {pokemon.name}</div>
                <div>Peso: {pokemon.weight}</div>
                <div>Altura: {pokemon.height}</div>
                <img src={pokemon.sprites.front_default} />
                </div>
                } */}
            </div>

        </div>
    );
}

export default Searchbar;