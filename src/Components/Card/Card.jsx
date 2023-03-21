import React from 'react';
import cazuela_de_vacuno from '../AssetsCard/cazuela_de_vacuno.jpg';
import humitas from '../AssetsCard/humitas.jpg';
import pastel_de_choclo from '../AssetsCard/pastel_de_choclo.jpg';
import porotos_granados from '../AssetsCard/porotos_granados.jpg';


const Card = () => {
  return (
    <div className="container">
    <div className="row row-cols-1 row-cols-md-2 g-4">
    <div className="col">
      <div className="card">
        <img src={cazuela_de_vacuno} className="card-img-top" alt="card1"/>
        <div className="card-body">
          <h5 className="card-title">Cazuela de vacuno</h5>
          <p className="card-text" style= {{textAlign:"justify"}}>Se trata de un guiso hecho con carne de vacuno, usualmente cortada en cubos, que se cocina lentamente con una variedad de verduras, especias y líquidos hasta que la carne esté tierna y los sabores se hayan mezclado.</p>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card">
        <img src={humitas} className="card-img-top" alt="card2"/>
        <div className="card-body">
          <h5 className="card-title">Humitas</h5>
          <p className="card-text" style= {{textAlign:"justify"}}>La humita es un plato tradicional chileno. Las humitas son un platillo muy sabroso y nutritivo, 
          y son ideales para disfrutar en el almuerzo o la cena. También son una buena opción para vegetarianos y veganos
         ya que pueden adaptarse fácilmente a una dieta sin carne.</p>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card">
        <img src={porotos_granados} className="card-img-top" alt="card3"/>
        <div className="card-body">
          <h5 className="card-title">Porotos granados</h5>
          <p className="card-text" style= {{textAlign:"justify"}}>La cazuela de vacuno es un plato tradicional chileno. 
          Se trata de un guiso hecho con carne de vacuno, usualmente cortada en cubos, que se cocina lentamente con una variedad de verduras, 
          especias y líquidos hasta que la carne esté tierna y los sabores se hayan mezclado.</p>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card">
        <img src={pastel_de_choclo} className="card-img-top" alt="card4"/>
        <div className="card-body">
          <h5 className="card-title">Pastel de choclo</h5>
          <p className="card-text" style= {{textAlign:"justify"}}>El pastel de choclo es un plato de la temporada de verano en Chile.
          Consiste en una mezcla de maíz molido y condimentado,cubierto con una capa de carne y verduras,
          y horneado hasta que se forme una costra dorada en la parte superior.</p>
        </div>
      </div>
    </div>
  </div>
  </div>

  )
}

export default Card