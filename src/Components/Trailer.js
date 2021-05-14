import React from "react";
import { useParams } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Trailer = ({ moviesInfo }) => {
  const { ID } = useParams();

  return (
    <div>
      {moviesInfo
        .filter((el) => el.id == ID)
        .map((el, key) => (
          <Card key={el.id} style={{ width: "18rem" }}>
            <Card.Body>
              <iframe src={el.trailer} title="YouTube video"></iframe>
              <Card.Title className="card">{el.description}</Card.Title>
              <Link to="/">
                <Button>Back Home</Button>
              </Link>
            </Card.Body>
          </Card>
        ))}
    </div>
  );
};

export default Trailer;
