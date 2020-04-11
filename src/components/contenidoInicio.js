import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'

import Ubicacion from './ubicacion'


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
                  <div className="textoJustificado">
                  Somos dos personas que elaboramos y distribuimos viandas saludables con productos magros, descremados e integrales. <br/>
                  Las comidas se entregan totalmente cocidas en bandejas con tapa aptas para microondas y freezer. <br/>
                  Contamos con platos de entre 180 y 300 calorias. <br/>
                  Hechas 100% caseras y con amor! Que las disfrutes!
                  </div>
                  </div>
                </div>
                <div className="col-md-5 startBox">
                    <div className="text-center startText">
                        <h4 className="startTitles">Precios y pedidos</h4>
                        <div>
                          1 vianda - $160 <br/>
                          5 viandas - $750 <br/>
                          Pedido minimo - 5 viandas <br/>
                          En un pedido de 5 viandas <br/>
                          elegir todos platos distintos <br/>
                          (en 10 viandas hasta 2, en 15 hasta 3, etc)
                        </div>
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
                            Resto de C.A.B.A. via Glovo
                            <br/>
                            (A cargo del comprador)
                      
                    </div>
                  </div>
                </div>
            </div>
    </>
     );
}
 
export default ContenidoInicio;