import React from 'react'
import './stylesTexto.css'
const Texto = (props) => {
    return (
        <div className="texto">
            <h4>{props.titulo}</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta iure eius in harum dolores, enim vitae at accusamus hic non mollitia autem commodi, quaerat labore aliquid repellat. Atque, reprehenderit hic.
          </p>
        </div>
    )
}

export default Texto
