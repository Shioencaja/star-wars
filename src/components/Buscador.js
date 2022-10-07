import React, { Component } from "react";

class Buscador extends Component {
  render() {
    const { busqueda } = this.props; // se declara el prop del parent para poder usarlo
    return (
      <>
        <form className="w-full flex justify-center items-center gap-6 p-6">
          <p>Filtra a los personajes</p>
          <input
            className="p-2 bg-black rounded border-2 border-white"
            type="search"
            placeholder="Buscar Personaje"
            onChange={busqueda} //se llama a la función prop del elemento parent que se declara al inicio
          />
        </form>
      </>
    );
  }
}

export default Buscador;
