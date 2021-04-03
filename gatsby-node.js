/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const result = await graphql(
      `
        {
          categories: allStrapiCategory {
            edges {
              node {
                name
              }
            }
          }
        }
      `
    );
  
    if (result.errors) {
      throw result.errors;
    }
  
    // Create blog articles pages.
    const categories = result.data.categories.edges;
  
    const CategoryTemplate = require.resolve('./src/templates/category.js');
  
    categories.forEach((category, index) => {
      createPage({
        path: `/category/${category.node.name}`,
        component: CategoryTemplate,
        context: {
          name: category.node.name,
        },
      });
    });
  };
  