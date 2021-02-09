import React, {useState} from 'react';

const Texto = ({nombre, pos}) => {
    //const { nombre } = props.nombre; esto es si me llega el objeto props entero.
    const [contador, setContador] = useState(0);
    const aumentar = () => {
        setContador(contador + 1);
    }

    return (
        <div>
            <p>   
            {pos}: {nombre} (Cantidad: {contador})
            </p>
            <input type='button' value='mostrar' onClick={aumentar}/>
        </div>
    )
}

export default Texto;