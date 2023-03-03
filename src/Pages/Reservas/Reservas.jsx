import { db } from "../../Config/firebase";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import './Reservas.css';





const Reservas = () => {
 const valorInicial = {
    name:'',
    email:'',
    fecha:'',
    mesa:''
 }

//variables de estado

const [user, setUser] = useState(valorInicial);

//funciones controladoras del form

const cathInputs = (e) => {
    e.preventDefault()

    const {name, value}= e.target;

setUser({
    ...user,
    [name]: value

})
}

const reservarMesa = async(e) => {
    e.preventDefault()

    try {
        const collectionRef = collection(db, 'Reservas')
        await addDoc(collectionRef, {
            ...user
        

        })

    } catch (error){
        console.log(error)

    }

    setUser({...valorInicial})

}



return (
    <div>
      <div>
        <h2>Reservas</h2>
        {/*formulario*/}
      </div>
      <form onSubmit={reservarMesa}>
        <div>
          <div className="form-group">
            <input type='text'  name='name' className="form-control mb-3" placeholder="Ingresa tu nombre" onChange={cathInputs} value={user.name}/>
          </div>
          <div className="form-group">
            <input type='text'  name='email' className="form-control mb-3" placeholder="Ingresa tu email" onChange={cathInputs} value={user.email}/>
          </div>
          <div>
            <input type='text'  name='fecha' className="form-control mb-3" placeholder="Elige una fecha de reserva" onChange={cathInputs} value={user.fecha}/>
          </div>
          <div className="form-group">
            <input type='number'  name='mesa' className="form-control mb-3" placeholder="Ingresa tu mesa" onChange={cathInputs} value={user.mesa}/>   
          </div>
          <button className="btn btn-primary custom-button">Reservar</button>
        </div>
      </form>
    </div>
  )
}
export default Reservas
