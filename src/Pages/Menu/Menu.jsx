import React from 'react';
import { useState, useEffect } from 'react';
import { db } from '../../Config/firebase';
import { collection, getDocs } from 'firebase/firestore';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


const Menu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const getMenu = async () => {
      try {
        const collectionRef = collection(db, "Menu");
        const response = await getDocs(collectionRef);

        const docs = response.docs.map((doc) => {
          const data = doc.data(); //firestore guarda la información de cada documento en data()
          data.id = doc.id; // El id es igual al ID del plato de la base de datos
          return data;
        })

        setMenu(docs);
      } catch (error) {
        console.log(error);
      }
    }

    getMenu()
  }, [])

  console.log(menu)
  return (
    <div>
      <h1 className='text-center'>Menú</h1>
      <div>
      <CardGroup>
        {
          menu.map(plato => (
            <div key={plato.id} style={{ color: "#230606" }}>
              <Card style={{ width: '18rem', margin: '20px 10px'}}>
                <Card.Img variant='top' src={plato.imagen} alt={plato.name} style={{height: '250px'}}/>
                <Card.Body>
                  <Card.Title>{plato.name}</Card.Title>
                  <Card.Text>{plato.descripcion}</Card.Text>
                  <Button variant="dark">${plato.price}</Button>
                </Card.Body>
              </Card>
            </div>
          ))}
          </CardGroup>
      </div>
    </div>
  );
};

export default Menu;
