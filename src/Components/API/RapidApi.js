import React, { useEffect } from "react";
import { useState } from "react";
import { Form, Button, Card, Image } from "semantic-ui-react";
import "../Styles/RapidApi.css";
import { Link } from "react-router-dom";

const RapidApi = () => {
  const [endPoint, setEndPoint] = useState("Pakistan");

  const [container, setContainer] = useState([]);

  const [finalPoint, setFinalPoinet] = useState("");

  useEffect(() => {
    fetchMe();
  }, [finalPoint]);

  const fetchMe = () => {
    fetch(
      `https://online-movie-database.p.rapidapi.com/auto-complete?q=+${endPoint}`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "1e784cf01amsh7fb8a61698e2b22p1210dfjsn793dd3c96188",
          "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setContainer(data.d);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onChangeHandler = (e) => {
    setEndPoint(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setFinalPoinet(endPoint);
  };
  return (
    <div className="app">
      <h1>Online Movies</h1>
      <Form onSubmit={submitHandler}>
        <Form.Field>
          <input
            type="text"
            placeholder="Search for a movie..."
            value={endPoint}
            onChange={onChangeHandler}
          />
        </Form.Field>
        <Form.Button>
          <Button type="submit">Go</Button>
        </Form.Button>
        <Form.Button>
          <Link to="/Create">
            <Button>CRUD</Button>
          </Link>
        </Form.Button>
      </Form>
      <div className="element">
        {container.map((item, index) => {
          return (
            <div key={index}>
              <Card>
                <Image src={item.i.imageUrl} alt="" />
                <Card.Content>
                  <Card.Header>{item.l}</Card.Header>
                  <Card.Description>{item.s}</Card.Description>
                </Card.Content>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RapidApi;
