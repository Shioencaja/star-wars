import React from "react";

class Tarjeta extends React.Component {
  render() {
    const { name, height, gender } = this.props;
    return (
      <div className="bg-gray-700 h-40 w-full max-w-md flex flex-col justify-center p-6 rounded-lg hover:scale-105 transition-all">
        <p>Nombre: {name}</p>
        <p>Género: {gender}</p>
        <p>Altura: {height} cm</p>
      </div>
    );
  }
}

export default Tarjeta;
