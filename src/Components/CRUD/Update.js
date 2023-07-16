import React, { useState, useEffect } from "react";
import { Button, Form } from "semantic-ui-react";
import "../Styles/Update.css";
import axios from "axios";

export default function Update() {
  const [id, setID] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [date, setDate] = useState("");
  const [clas, setClas] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setFirstName(localStorage.getItem("First Name"));
    setFatherName(localStorage.getItem("Father Name"));
    setDate(localStorage.getItem("Date Of Birth"));
    setClas(localStorage.getItem("Class"));
    setAddress(localStorage.getItem("Address"));
  }, []);

  const updateAPIData = () => {
    axios.put(`https://64b11b9f062767bc4825b183.mockapi.io/api/${id}`, {
      firstName,
      fatherName,
      date,
      clas,
      address,
    });
    alert("Data is Updated Now!");
  };

  return (
    <div className="update">
      <h1 className="update-heading">Update Data</h1>
      <Form className="create-form">
        <Form.Field>
          <label>First Name</label>

          <input
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Father Name</label>
          <input
            placeholder="Father Name"
            value={fatherName}
            onChange={(e) => setFatherName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Date Of Birth</label>
          <input
            type="date"
            placeholder="Date Of Birth"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Class</label>
          <input
            placeholder="Class"
            value={clas}
            onChange={(e) => setClas(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Address</label>
          <input
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Form.Field>
        <Button type="submit" onClick={updateAPIData}>
          Update
        </Button>
      </Form>
    </div>
  );
}
