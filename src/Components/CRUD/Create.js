import axios from "axios";
import React from "react";
import { Form, Button } from "semantic-ui-react";
import "../Styles/Create.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Create = () => {
  const [firstName, setFirstName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [date, setDate] = useState("");
  const [clas, setClas] = useState("");
  const [address, setAddress] = useState("");

  const postData = () => {
    axios.post(`https://64b11b9f062767bc4825b183.mockapi.io/api`, {
      firstName,
      fatherName,
      date,
      clas,
      address,
    });

    alert("Your Info is Submitted");
  };

  return (
    <div className="main">
      <h1 className="main-heading">United School System</h1>
      <h2 className="child-heading">Student Card</h2>
      <Form className="create-form">
        <Form.Field>
          <label>First Name</label>
          <input
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Father Name</label>
          <input
            placeholder="Father Name"
            onChange={(e) => setFatherName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Date Of Birth</label>
          <input
            type="date"
            placeholder="Date Of Birth"
            onChange={(e) => setDate(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Class</label>
          <input
            placeholder="Class"
            onChange={(e) => setClas(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Address</label>
          <input
            placeholder="Address"
            onChange={(e) => setAddress(e.target.value)}
          />
        </Form.Field>
        <Button onClick={postData} type="reset">
          Submit
        </Button>
        <Link to="/Read">
          <Button>Read</Button>
        </Link>
      </Form>
    </div>
  );
};

export default Create;
