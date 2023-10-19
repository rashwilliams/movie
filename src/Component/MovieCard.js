import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const MovieCard = (props) => {
  return (
    <div>
      {props.movieList.map((movie) => {
        return (
          <a href={`/movie/${movie.title}`}>
            <div class="card" style={{ width: "100%" }}>
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default MovieCard;
