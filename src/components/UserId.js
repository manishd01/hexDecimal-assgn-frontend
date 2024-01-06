import React, { useState, useEffect } from "react";
function UserId() {
  const userId = 2; // Replace with the desired user ID
  const url = `http://localhost:8080/users/${userId}`;
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [url]);

  return (
    <div>
      <h1>Data Display of ${userId}</h1>
      can change user_id in code as well.
      <ul>
        {data.map((todo) => (
          <li key={todo.id}>
            Title: {todo.title}, Completed: {todo.completed ? "Yes" : "No"}
          </li>
        ))}
      </ul>
    </div>
  );

  //   const url = "http://localhost:8080/users/:id";
  //   const [data, setData] = useState([]);

  //   const fetchInfo = () => {
  //     return fetch(url)
  //       .then((res) => res.json())
  //       .then((d) => setData(d));
  //   };

  //   useEffect(() => {
  //     fetchInfo();
  //   }, []);
  //   return <>
  //   <div>
  //     <label> userid : {data.}</label>
  //   </div>
  //   </>;
}
export default UserId;
