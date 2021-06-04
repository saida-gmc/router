import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";
import { Link } from "react-router-dom";
const MoviesList = ({ moviesInfo, search, rating }) => {
  return (
    <div className="movieCard">
      {moviesInfo
        .filter((el) => el.title.toLowerCase().includes(search.trim()))
        .filter((el) => el.rating >= rating)
        .map((el, id) => (
          <Link to={`/${el.id}`}>
            <Card key={id} style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={el.image}
                height="300px"
                width="300"
              />

              <Card.Body>
                <Card.Text className="card">{el.date}</Card.Text>
                <Card.Title className="cardTitle">{el.title}</Card.Title>
                <ListGroup className="list-group-flush">
                  <StarRatingComponent value={el.rating} />
                </ListGroup>
                <Card.Text className="card-Text">{el.type}</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        ))}
    </div>
  );
};

export default MoviesList;
