import React from "react";
import { Fade } from "reactstrap";
import "./smallcard.scss";

const CardSmallDash = (props) => {
  return (
    <Fade bottom>
      <div className="small-card-dashboard mr-4" style={props.style}>
        <div className="row">
          <div className="col col-lg-6 ml-4 mt-3 text-light">
            <h1 style={{fontSize: "50px"}}>{props.jumlah}</h1>
            <p>{props.subtitle}</p>
          </div>
          <div className="col col-lg-3 ml-4">
            <img src={props.img} alt="card" className="img-card-dashboard" />
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default CardSmallDash;
