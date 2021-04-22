import React from 'react';
import '../style/table.css';

function PostList(props) {
  const generateRows = () => {
    return props.tableData.map((post, index) => {
      return(
        <tr id={index}>
          <td>{index + 1}</td>
          <td>{post.title}</td>
          <td>{post.createdAt}</td>
        </tr>
      )
    });
  }

  return(
    <div className="post-list">
      <h2>Latest posts</h2>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Post title</th>
            <th>Date posted</th>
          </tr>
        </thead>
        <tbody>
          {generateRows()}
        </tbody>
      </table>
    </div>
  );
}

export default PostList;
