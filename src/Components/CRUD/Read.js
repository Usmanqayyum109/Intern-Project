import React from "react";
import "../Styles/Read.css";
import axios from "axios";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Read() {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://64b11b9f062767bc4825b183.mockapi.io/api`)
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);

  const setData = (data) => {
    let { id, firstName, fatherName, date, clas, address } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("First Name", firstName);
    localStorage.setItem("Father Name", fatherName);
    localStorage.setItem("Date Of Birth", date);
    localStorage.setItem("Class", clas);
    localStorage.setItem("Address", address);
  };

  const getData = () => {
    axios
      .get(`https://64b11b9f062767bc4825b183.mockapi.io/api`)
      .then((getData) => {
        setAPIData(getData.data);
      });
  };

  const onDelete = (id) => {
    axios
      .delete(`https://64b11b9f062767bc4825b183.mockapi.io/api/${id}`)
      .then(() => {
        getData();
      });
    alert("Data is Deleted Now!");
  };
  return (
    <div className="container">
      <h1 className="header">Students Data</h1>
      {APIData.map((data) => {
        return (
          <div className="card-container ">
            <div className="card">
              <h1>United School System</h1>
              <div className="logo">
                <h2 className="name">Name: {data.firstName}</h2>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3w1FOdntFBmO6i0Fr_5VFRqgtrS6NQ0Od9Q&usqp=CAU"
                  alt="logo"
                  width="70px"
                  height="50px"
                />
              </div>
              <h3 className="fatherName">FatherName: {data.fatherName}</h3>
              <h4 className="class">Date Of Birth:{data.date}</h4>
              <h4 className="class">Class:{data.clas}</h4>
              <h5 className="adress">Address:{data.address}</h5>
              <Link to="/Update">
                <Button
                  style={{
                    backgroundColor: "#1cb5e0",
                    color: "#000046",
                  }}
                  onClick={() => setData(data)}
                >
                  Update
                </Button>
              </Link>
              <Button
                style={{
                  backgroundColor: "#1cb5e0",
                  color: "#000046",
                }}
                onClick={() => onDelete(data.id)}
              >
                Delete
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
