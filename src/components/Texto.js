import React from 'react';

const Texto = ({nombre}) => {
    //const { nombre } = props.nombre; esto es si me llega el objeto props entero.
    return (
        <p>   
            {nombre}
        </p>
    )
}

export default Texto;