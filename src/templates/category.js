// category.js

import React from 'react';
import { graphql } from 'gatsby';

export const query = graphql`
  query Category($name: String!) {
    category: strapiCategory(name: { eq: $name }) {
      name
      restaurants {
        id
        name
      }
    }
  }
`;

const Category = ({ data }) => {
  const restaurants = data.category.restaurants;
  const category = data.category.name;

  return (
    <div>
      <h1>{category}</h1>
      <ul>
        {restaurants.map(restaurant => {
          return <li key={restaurant.id}>{restaurant.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Category;
