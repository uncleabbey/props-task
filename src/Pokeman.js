import React from "react";
import Proptype from "prop-types";
import data from "./data";

const Pokecard = ({name, type, image}) => {
  return (
    <div className="pokecard">
      <h2>{name}</h2>
      <img src={image} alt="pokedex_image"/>
      <p>Type: {type}</p>
    </div>
  )
}

Pokecard.propTypes = {
  name: Proptype.string,
  type: Proptype.string,
  image: Proptype.string
}
const Pokedex = ({data}) => {
  return (
    <div>
      <h1>Pokemon List</h1>
      <div className="pokedex">
        {
          data.pokemon.map(({id, type, image,name}) => <Pokecard key={id} name={name} type={type} image={image} />)
        }
      </div> 
    </div>
  )
}

Pokedex.defaultProps = { data };

export default Pokedex;