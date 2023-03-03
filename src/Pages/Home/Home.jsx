import React from 'react';
import Imagenes from '../../Components/Imagenes/Imagenes';
import imagen1 from '../../Assets/imagen1.jpg';
import imagen2 from '../../Assets/imagen2.jpg';
import imagen3 from '../../Assets/imagen3.jpg';

const Home = () => {
  const images = [imagen1, imagen2, imagen3];

  return (
    <div style={{ backgroundColor: '#f2f2f2' }}>
      <Imagenes images={images} />
    </div>
  );
};

export default Home