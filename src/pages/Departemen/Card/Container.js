import React, { Component } from "react";
import { Gap } from "../../../components/atoms";
import { connect } from "react-redux";
import Card from "./Component";
import { departemenAction } from "../../../config/actions/departemen";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

class CardContainer extends Component {
  componentDidMount() {
    this.props.dispatch(departemenAction());
  }
  render() {
    return (
      <div className="container">
        <h1>Departemen</h1>
        <h5 className="text-muted">
          Data terkait departemen dapat dilihat dengan klik Lihat Data
        </h5>
        <Gap height={20} />
        <Link to={"/departemen/tambah-departemen"}>
          <Button color="dark" className="mr-2">
            <FontAwesomeIcon icon={faBriefcase} />{" "} Tambah Departemen
          </Button>
        </Link>
        <Card />
      </div>
    );
  }
}

export default connect()(CardContainer);
