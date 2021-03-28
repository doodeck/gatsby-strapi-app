import * as React from "react"
import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
// import SEO from "../components/seo"

import { StaticQuery, graphql } from 'gatsby';

const query = graphql`
  query {
    allStrapiRestaurant {
      edges {
        node {
          strapiId
          name
          description
        }
      }
    }
    strapiCategory(strapiId: { eq: 1 }) {
      id
      name
      restaurants {
        id
        name
        description
      }
    }
  }
`;

const IndexPage = () => (
  <Layout>
    <StaticQuery
      query={query}
      render={data => (
        <div>
          <ul>
            {data.allStrapiRestaurant.edges.map(restaurant => (
              <li key={restaurant.node.strapiId}>{restaurant.node.name}</li>
            ))}
          </ul>
        <h1>{data.strapiCategory.name}</h1>
        <ul>
          {data.strapiCategory.restaurants.map(restaurant => (
            <li key={restaurant.id}>{restaurant.name}</li>
          ))}
        </ul>
      </div>
    )}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
)

export default IndexPage
