import React from 'react';

function PostList(props) {

  return(
    <table>
      <thead>
        <tr>
          <th>No</th>
          <th>Post title</th>
          <th>Date posted</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Placeholder title</td>
          <td>01/01/2019</td>
        </tr>
      </tbody>
    </table>
  );
}

export default PostList;
