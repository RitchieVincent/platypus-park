const path = require(`path`)
const fs = require("fs")

// exports.onPostBuild = () => {
//   fs.copyFile(`./firebase.json`, `./public/firebase.json`, err => {
//     if (err) {
//       throw err
//     }
//   })
// }

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allWordpressPost(sort: { fields: [date] }) {
        edges {
          node {
            slug
          }
        }
      }
      allWordpressPage {
        edges {
          node {
            slug
          }
        }
      }
    }
  `).then(result => {
    result.data.allWordpressPost.edges.forEach(({ node }) => {
      createPage({
        path: node.slug,
        component: path.resolve(`./src/templates/post.js`),
        context: {
          // This is the $slug variable
          // passed to post.js
          slug: node.slug,
        },
      })
    })

    result.data.allWordpressPage.edges.forEach(({ node }) => {
      createPage({
        path: node.slug,
        component: path.resolve(`./src/templates/page.js`),
        context: {
          slug: node.slug,
        },
      })
    })
  })
}
