import React from "react";
import Fade from 'react-reveal/Fade';
import "./Card.css";

export default function Card(props) {
  return (
    <Fade bottom>
    <div className="col-lg-4 pt-4">
      <div className="card mx-auto card-custom" style={{ width: "18rem" }}>
        <img className="card-img-top" src={props.imgCard} alt="Card" />
        <div className="card-body">
          <h5 className="card-title">{props.cardText}</h5>
        </div>
      </div>
    </div>
    </Fade>
  );
}
