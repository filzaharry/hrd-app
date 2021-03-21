import React from "react";
import { Fade } from "reactstrap";
import "./smallcard2.scss";

const CardSmallDash2 = (props) => {
  return (
    <Fade bottom>
      <div className="small-card-dashboard-2 mr-3" style={props.style}>
        <div className="row">
          <div className="col ml-4 mt-3 text-light text-center">
            <h1 style={{fontSize: "50px"}}>{props.jumlah}</h1>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default CardSmallDash2;
