import { graphql, useStaticQuery } from 'gatsby';

const usePlatos = () => {

    const data = useStaticQuery(graphql`
    query {
        allDatoCmsPlato {
          nodes {
            contenido
            imagen {
                fluid{
                    ...GatsbyDatoCmsFluid
                  }
            }
            titulo
            slug
          }
        }
      }
    `)
             

    return data.allDatoCmsPlato.nodes.map(plato => ({
        contenido: plato.contenido,
        id: plato.id,
        imagen: plato.imagen,
        titulo: plato.titulo,
        slug: plato.slug}))
    
    }
 
export default usePlatos;