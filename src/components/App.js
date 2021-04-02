import React from 'react';
import { useQuery, gql } from '@apollo/client'

import Chart from './Chart';

const FETCH_DATA = gql`
  query GetPosts {
      allPosts (count: 500) {
        id
        createdAt
      }
    }
`;

const App = () => {
  const { loading, error, data } = useQuery(FETCH_DATA);

  //if (loading) return <p>Loading...</p>
  //if (error) return `Error! ${error.message}`;

  /*const fetchedData = data.allPosts.map(({ id, createdAt }) => {
    let convertedDate = new Date(Number(createdAt));
    let year = convertedDate.getFullYear();
    return (
      <div key={id}>
        <p>
          {id}: {createdAt} ( {year} )
        </p>
      </div>
    );
  });*/

  return (
    <div>
      <h2>Monthly postcount - 2019</h2>
      <Chart />
    </div>
  );
}

export default App;
