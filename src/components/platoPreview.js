import React, { useState } from 'react'
import Image from 'gatsby-image'
import styled from "styled-components"

const PlatoPreview = ({plato}) => {

    const [viewDetails, setViewDetails] = useState(false)

    const CardCss = styled.div`
    padding: 20px;
    box-shadow: 
         inset 0 -3em 3em rgba(0,0,0,0.1), 
               0 0  0 2px rgb(255,255,255),
               0.3em 0.3em 1em rgba(0,0,0,0.3);
    `;

    const { contenido, titulo, imagen } = plato

    console.log('el valor de viewDetailes esta en: ', viewDetails)

    var arrayDeIngredientes;
    var coma = ",";
    //Funcion para separar los ingredientes en elementos de array
    function dividirCadena(cadenaADividir,separador) {
        arrayDeIngredientes = cadenaADividir.split(separador);
        console.log('<p>La cadena original es: "' + cadenaADividir + '"');
        console.log('<br>El separador es: "' + separador + '"');
        console.log("<br>El array tiene " + arrayDeIngredientes.length + " elementos: ");
     
        for (var i=0; i < arrayDeIngredientes.length; i++) {
           console.log(arrayDeIngredientes[i] + " / ");
        }
     }

    dividirCadena(contenido, coma)
     

    return (
    <>
        <div className="col-md-4 mb-2 mt-3"> 
        <CardCss className="card h-100">
            <Image fluid={imagen.fluid}/>
            <div className="card-body">
                <h4 className="card-title text-center ingredientsTitle">{titulo}</h4>
                <button 
                    type="button" 
                    className="btn btn-primary btn-block ingredientsButton"
                    onClick={e => setViewDetails(!viewDetails)}
                >Ingredientes
                </button>
                {
                    (viewDetails) ? arrayDeIngredientes.map(elem => (
                       <p className="ingredientsText">{elem}</p> 
                    )) : null
                }
            </div>
        </CardCss>
        </div>
        
    </>
     );
}
 
export default PlatoPreview;