import React, { useState, useEffect } from "react";
import Buscador from "../components/Buscador";
import ListaTarjetas from "../components/ListaTarjetas";
import Scroll from "../components/Scroll";

function App() {
  const [nombre, setNombre] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://swapi.dev/api/people")
      .then((respuesta) => respuesta.json())
      .then((personaje) => {
        setNombre(personaje.results);
      });
  }, [count]);

  const alBuscar = (event) => {
    setBusqueda(event.target.value);
  };

  const filtro = nombre.filter((nombre) => {
    return nombre.name.toLowerCase().includes(busqueda.toLowerCase());
  });
  return !filtro.length ? (
    <>
      <h2 className="text-center">Loading</h2>
      <Buscador busqueda={alBuscar} />
    </>
  ) : (
    <>
      <h1 className="text-center text-amber-300">STAR WARS</h1>

      <Buscador busqueda={alBuscar} />
      <Scroll>
        <ListaTarjetas personajes={filtro} />
      </Scroll>
      <button onClick={() => setCount(count + 1)}>Reload</button>
    </>
  );
}

export default App;
