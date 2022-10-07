import React from "react";
import Buscador from "../components/Buscador";
import ListaTarjetas from "../components/ListaTarjetas";
import Scroll from "../components/Scroll";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: [],
      busqueda: "",
    };
  }
  componentDidMount() {
    /* 
    fetch("https://swapi.dev/api/people") //hace una petición al link para leer su interior
      .then((response) => {
        //agarra la respuesta de lo anterior
        return response.json(); //y lo convierte en json
      })
      .then((personaje) => {
        //luego a ese resultado le coloca un nombre, en este caso escogí personaje
        this.setState({ nombre: personaje.results }); //y coloca como state en nombre el resultado anterior, usando personaje como una base de datos
      }); 
      */
    //versión reducida
    fetch("https://swapi.dev/api/people")
      .then((respuesta) => respuesta.json())
      .then((personaje) => this.setState({ nombre: personaje.results }));
  }

  alBuscar = (event) => {
    this.setState({ busqueda: event.target.value });
  };
  render() {
    const { nombre, busqueda } = this.state;
    const filtro = nombre.filter((nombre) => {
      return nombre.name.toLowerCase().includes(busqueda.toLowerCase());
    });
    return !filtro.length || !nombre ? (
      <>
        <h2 className="text-center">Loading</h2>
      </>
    ) : (
      <>
        <h1 className="text-center text-amber-300">STAR WARS</h1>
        <Buscador busqueda={this.alBuscar} />
        <Scroll>
          <ListaTarjetas personajes={filtro} />
        </Scroll>
      </>
    );
  }
}

export default App;
