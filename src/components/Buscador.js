import React from "react";

function Buscador(props) {
  return (
    <>
      <form className="w-full flex justify-center items-center gap-6 p-6">
        <p>Filtra a los personajes</p>
        <input
          className="p-2 bg-black rounded border-2 border-white"
          type="search"
          placeholder="Buscar Personaje"
          onChange={props.busqueda} //se llama a la función prop del elemento parent que se declara al inicio
        />
      </form>
    </>
  );
}

export default Buscador;
