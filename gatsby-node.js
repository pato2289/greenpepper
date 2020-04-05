exports.createPages = async ({ actions, graphql, reporter}) => {
    const resultado = await graphql(`
    query{
        allDatoCmsPlato{
          nodes{
            slug
          }
        }
      }
      `);

      //console.log(resultado.data.allDatoCmsHabitacion.nodes);

      if(resultado.errors) {
          reporter.panic('No hubo resultados', resultado.errors)
      }

      // si hay paginas, crear los archivos
      const platos = resultado.data.allDatoCmsPlato.nodes

      platos.forEach(plato => {
          actions.createPage({
              path: plato.slug,
              component: require.resolve('./src/components/platos.js'),
              context: {
                  slug: plato.slug
              } 
          })
      })
}