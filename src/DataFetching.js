import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function DataFetching() {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({});

  // demonstate both axios and fetch api
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts', {
  //     method: 'GET'
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data)
  //       setPosts(data)
  //     })
  //     .catch(err => console.log(err));
  // }, []);
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(({ data }) => {
        console.log(data);
        setPosts(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleView = (id) => {
    console.log('===', id)
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setPost(data)
      })
      .catch(err => console.log(err));
  }
  useEffect(() => {
    handleView(post.id)
  }, [post.id])
  return (
    <div>
      {posts.length > 0 ? (
        <ul>
          {posts.map(post => (
            <li key={post.id}>{post.title} <button onClick={() => handleView(post.id)}>View</button></li>
          ))}
        </ul>
      ) : (
        <p>No posts available</p>
      )}
      <h3> here is today's post</h3>
      <p>{post.title}</p>
    </div>
  );
}
