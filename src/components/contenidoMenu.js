import React from 'react'
import styled from "styled-components"

import PlatoPreview from "./platoPreview";
import usePlatos from '../hooks/use-platos'


const ContenidoMenu = () => {

    const platos = usePlatos()
    console.log(platos)

    const P = styled.p`
    line-height: 2rem;
    `;

    return (
    <> 
        <div className="container">
          <div className="row">
          {platos.map(plato => (
            <PlatoPreview
              key={plato.id}
              plato={plato}
            />
          ))}
          </div>
        </div>
    </>
    );
}
 
export default ContenidoMenu;