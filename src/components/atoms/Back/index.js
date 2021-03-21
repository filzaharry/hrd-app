import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Back = (props) => {
  return (
    <div className="row">
      <div className="col text-left">
        <p
          style={{ cursor: "pointer" }}
          className="text-primary"
          onClick={props.onClick}
        >
          <FontAwesomeIcon icon={faArrowAltCircleLeft} /> {props.title}
        </p>
      </div>
      <div className="col text-right">
        <p className="text-muted" style={{ textAlign: "right" }}>
          {props.route}
        </p>
      </div>
    </div>
  );
};

export default Back;
