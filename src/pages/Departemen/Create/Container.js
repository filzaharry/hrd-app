import React, { Component } from "react";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
// import { connect } from "react-redux";
// import { departemenAddAction } from "../../../config/actions/departemen";
import Form from "./Component";
import swal from 'sweetalert';
import { Gap } from "../../../components";

// const mapStateToProps = (state) => {
//   return {
//     getResponseDataKaryawan: state.departemen.getResponseDataKaryawan,
//     errorResponseDataKaryawan: state.departemen.errorResponseDataKaryawan,
//   };
// };

class TambahDepartemen extends Component {
  // handleSubmit(data) {
  //   console.log(data);
  //   this.props.dispatch(departemenAddAction(data))
  // }

  render() {
    if (
      this.props.getResponseDataKaryawan ||
      this.props.errorResponseDataKaryawan
    ) {
      if (this.props.errorResponseDataKaryawan) {
        swal(
          "Gagal !",
          `${this.props.getResponseDataKaryawan.name} gagal ditambah sebagai Departemen`,
          "error"
        );
      } else {
        swal(
          "Berhasil !",
          `${this.props.getResponseDataKaryawan.name} berhasil ditambah sebagai Departemen`,
          "success"
        );
      }
    }
    return (
      <form>
        <Link to="/departemen" className="btn btn-info">
          <FontAwesomeIcon icon={faArrowLeft} />
          Kembali ke Departemen
        </Link>
        <Gap height={20} />
        <h3>Tambah Departemen Baru</h3>
        <Gap height={20} />
        <div className="container shadow-lg p-3 mb-5 bg-white rounded">
        <Form onSubmit={(data) => this.handleSubmit(data)} />
        </div>
      </form>
    );
  }
}

export default 
// connect(mapStateToProps, null)
(TambahDepartemen);
