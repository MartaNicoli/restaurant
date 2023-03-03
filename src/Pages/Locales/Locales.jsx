import { useState, useEffect } from 'react';
import { db } from '../../Config/firebase';
import { collection, getDocs } from 'firebase/firestore';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Locales.css';


const Locales = () => {

    const [locales, setLocales] = useState([]);

    useEffect(() => {
        const getLocales = async () => {
            try {
                const collectionRef = collection(db, "Locales");
                const response = await getDocs(collectionRef);

                const docs = response.docs.map((doc) => {
                    const data = doc.data(); //firestore guarda la información de cada documento en data()
                    data.id = doc.id; // El id se igual al ID del local de la base de datos
                    return data;
                })

                setLocales(docs);
            } catch (error) {
                console.log(error);
            }
        }

        getLocales()
    }, [])

    console.log(locales)



    return (
        <div>
            <h1 className='text-center'>Locales</h1>
            <div >
                <Container className="table-container" >
                    <Row>
                        <Col>Local</Col>
                        <Col>Dirección</Col>
                        <Col>Horario</Col>
                        <Col>Región</Col>
                    </Row>

                    {locales.map(local => (
                        <Row key={local.id} style={{ color: "#230606" }}>

                            <Col>{local.name}</Col>
                            <Col>{local.direccion}</Col>
                            <Col>{local.horario}</Col>
                            <Col>{local.region}</Col>
                        </Row>
                        ))}

                 </Container>
                         </div>
                    

            </div>
     

    );
}


export default Locales