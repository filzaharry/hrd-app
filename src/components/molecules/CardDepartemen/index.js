import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { Col } from "reactstrap";
// import "./carddep.scss";

const CardDepartemen = (props) => {
  return (
    <Col md={4} xs={6}>
      <div className="card mb-4">
        <img
          src={props.gambarDep}
          className="card-img-top card-dep-img"
          alt="departemen"
        />
        <div className="card-body row">
          <h5 className="ml-4 mt-1">{props.namaDep}</h5>
          <Link href="#" className="btn btn-info ml-auto">
            <FontAwesomeIcon icon={faUser}/> Lihat Detail
          </Link>
        </div>
      </div>
    </Col>
  );
};

export default CardDepartemen;
