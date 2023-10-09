import React from "react";
import {Card} from "react-bootstrap";
import MovieList from "./MovieList.js";
import { Fragment } from "react";


const MovieCard = (props) => {
    return ( <Fragment>
        <Card style={{ width: "100%" }} className="mb-3 mt-2" key={MovieList}>
              <Card.Body>
                <Card.Title>{props.Title}</Card.Title>
                <Card.Description>{props.Description}</Card.Description>
                <Card.Rating>{props.Rating}</Card.Rating>
                <Card.URL>{props.URL}</Card.URL>
              </Card.Body>
            </Card>
      </Fragment>

    )

}

export default MovieCard