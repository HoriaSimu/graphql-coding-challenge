import React from 'react';
import { useQuery, gql } from '@apollo/client'

import Chart from './Chart';

const FETCH_DATA = gql`
  query GetPosts {
      allPosts (count: 50) {
        createdAt
      }
    }
`;

const App = () => {
  const { loading, error, data } = useQuery(FETCH_DATA);

  if (loading) return <p>Loading...</p>
  if (error) return `Error! ${error.message}`;

  // the array `results` will hold the year and month of each post
  const results = [];

  // usually a .map method should return a value, so this is not ideal
  // but works for now

  data.allPosts.map(({ createdAt }) => {
    let convertedDate = new Date(Number(createdAt));
    let year = convertedDate.getFullYear();
    let month = convertedDate.getMonth();

    results.push({
      year: year,
      month: month
    });
  });

  // filtering away the posts not made in 2019
  // this might be unnecessary, since all posts from fakerQL *seem* to be made in 2019
  // but better safe than sorry

  const filteredResults = results.filter((post) => {
    return post.year === 2019;
  });

  // `chartData` will contain the post count for each month
  // this will be passed as a prop to the Chart component

  const chartData = [];
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

  const count = (results, value) => {
    return results.filter(item => item.month === value).length;
  }

  for (let i = 0; i <= 11; i++) {
    chartData.push(
      {
        month: monthNames[i],
        postCount: count(filteredResults, i)
      }
    );
  }

  return (
    <div className="wrapper">
      <h2>Monthly postcount - 2019</h2>
      <Chart chartData={chartData} />
    </div>
  );
}

export default App;
