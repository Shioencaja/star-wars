import React from "react";
import Tarjeta from "./Tarjeta";

const ListaTarjetas = ({ personajes }) => {
  const listaDePersonajes = personajes.map((nombre, i) => {
    return (
      <Tarjeta
        name={personajes[i].name}
        gender={personajes[i].gender}
        height={personajes[i].height}
        key={personajes[i].name}
      />
    );
  });
  return listaDePersonajes;
};

export default ListaTarjetas;
