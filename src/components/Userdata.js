import React, { useEffect, useState } from "react";
import "./App.css";
function Userdata() {
  const url = "http://localhost:8080/users";
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="App">
      <h1>using JavaScript inbuilt FETCH API</h1>
      <center>
        <table>
          <tr className="headingT">
            <th className="elementV headingT">NAME</th>
            <th className="elementV headingT"> EMAIL</th>
            <th className="elementV headingT">usernname</th>
            <th className="elementV headingT">city</th>
          </tr>
        </table>
        {data.map((dataObj, index) => {
          return (
            <div>
              <div style={{ display: "inline-flex" }}>
                <tr style={{ justifyContent: "left" }}>
                  <td className="elementV">{dataObj.name}</td>
                  <td className="elementV">{dataObj.email}</td>
                  <td className="elementV">{dataObj.username}</td>
                  <td className="elementV">{dataObj.address.city}</td>
                </tr>
              </div>
              {/* <p style={{ fontSize: 20, color: "white" }}>{dataObj.name}</p> */}
            </div>
          );
        })}
      </center>
    </div>
  );
}
export default Userdata;
