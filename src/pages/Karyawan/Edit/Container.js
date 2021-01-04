import React, { Component } from "react";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Gap } from "../../../components";
import Form from "./Component";
import { connect } from "react-redux";
import {
  karyawanDetailAction,
  karyawanUpdateAction,
} from "../../../config/actions/karyawan";
import swal from "sweetalert";

const mapStateToProps = (state) => {
  return {
    getResponseDataKaryawan: state.karyawan.getResponseDataKaryawan,
    errorResponseDataKaryawan: state.karyawan.errorResponseDataKaryawan,
  };
};

class EditKaryawan extends Component {
  componentDidMount() {
    this.props.dispatch(karyawanDetailAction(this.props.match.params.id));
  }
  
  handleSubmit(data) {
    console.log(data);
    this.props.dispatch(karyawanUpdateAction(data, this.props.match.params.id));
  }

  render() {
    if (
      this.props.getResponseDataKaryawan ||
      this.props.errorResponseDataKaryawan
    ) {
      if (this.props.errorResponseDataKaryawan) {
        swal(
          "Gagal !",
          `${this.props.getResponseDataKaryawan.name} gagal di Update`,
          "error"
        );
      } else {
        swal(
          "Terupdate !",
          `${this.props.getResponseDataKaryawan.name} berhasil di Update`,
          "success"
        );
      }
    }
    return (
      <form>
        <Link to="/karyawan" className="btn btn-info">
          <FontAwesomeIcon icon={faArrowLeft} />
          Kembali ke Karyawan
        </Link>
        <Gap height={20} />
        <h3>Edit Karyawan</h3>
        <Gap height={20} />
        <Form onSubmit={(data) => this.handleSubmit(data)} />
      </form>
    );
  }
}

export default connect(mapStateToProps, null)(EditKaryawan);
