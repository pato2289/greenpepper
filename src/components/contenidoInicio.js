import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'

import Ubicacion from './ubicacion'
import RedesSociales from './social'


const ContenidoInicio = () => {

    const resultado = useStaticQuery(graphql`
    query {
        allDatoCmsPagina(filter: {slug: {eq: "ini"}}) {
          nodes {
            contenido
            imagen {
              fluid {
                ...GatsbyDatoCmsFluid
              }
            }
            slug
            titulo
            ubicacion {
              latitude
              longitude
            }
          }
        }
      }
      
      `)

    //console.log(resultado.allDatoCmsPagina.nodes[0])

    const { titulo, contenido, imagen } = resultado.allDatoCmsPagina.nodes[0]


    return (
    <>
        <Image fluid={imagen.fluid}/> 
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-md-5 startBox">
                  <div className="startText">
                <h4 className="text-center startTitles">Nosotros</h4>
                  {contenido}
                  </div>
                </div>
                <div className="col-md-5 startBox">
                    <div className="text-center startText">
                        <h4 className="startTitles">Precios y pedidos</h4>
                          <div>1 vianda: $160</div>
                          <div>5 viandas: $750</div>
                          * Pedido minimo: 5 viandas
                          <br/>
                          * Cada pedido puede contener 1 plato 
                          <br/>(Ej: Prohibido 2 "Tarta Atun" en 1 pedido de 5 viandas)
                    </div>
                </div>
              </div>
                <div className="row d-flex justify-content-center">
                  <div className="col-md-5 startBox">
                    <div className="startText">
                      <h4 className="text-center startTitles">Encontranos en...</h4>
                      <Ubicacion />
                    </div>
                  </div>
                  <div className="col-md-5 startBox">
                    <div className="text-center startText">
                        <h4 className="startTitles">Envios gratis</h4>
                            <div>Villa Devoto</div>
                            <div>Villa del Parque</div>
                            <div>Villa Pueyrredon</div>
                            * Se envia a toda C.A.B.A. por medio de Glovo 
                            <br/>
                            (Envio a cargo del comprador)
                      
                    </div>
                  </div>
                </div>
            </div>
    </>
     );
}
 
export default ContenidoInicio;