const path = require(`path`)
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const Vacantes = path.resolve(`src/templates/Vacantes.tsx`)
  const result = [
      {
          slug: '/vacantesV3/municipio/Rionegro',
          title: 'Rionegro'
      },
      {
        slug: '/vacantesV3/municipio/La Ceja',
        title: 'La Ceja'
    },
    {
        slug: '/vacantesV3/municipio/Marinilla',
        title: 'Marinilla'
    },
  ]
  result.forEach(edge => {
    createPage({
      path: `${edge.slug}`,
      component: Vacantes,
      context: {
        title: edge.title,
      },
    })
  })
}