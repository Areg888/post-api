import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Postform = () => {
  const [users, setUsers] = useState([]);
  const url = "http://intern-2022.arpify.com/init"
  useEffect(() => {
    axios
      .post(url, {
        firstName: "Areg",
        lastName: "Budaghyan",
        birthDay: "2004-08-14",
        gender: "male",
      })
      .then(function (response) {
        console.log(response);
        setUsers(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  let tableData = users.map((item) => {
    return item.firstName == "Areg" ? (
      <tr style={{ color: "red" }} key={item.id}>
        <td>{item.birthDay}</td>
        <td>{item.firstName}</td>
        <td>{item.gender}</td>
        <td>{item.lastName}</td>
      </tr>
    ) : (
      <tr key={item.id}>
        <td>{item.birthDay}</td>
        <td>{item.firstName}</td>
        <td>{item.gender}</td>
        <td>{item.lastName}</td>
      </tr>
    );
  });

  return (
    <div>
      <table>
        <tbody>{tableData}</tbody>
        <Link to={"/postinput"} >Second part</Link>
      </table>
    </div>
  );
};

export default Postform;
