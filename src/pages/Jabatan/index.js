import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { Button } from "reactstrap";
import { Gap } from "../../components";
import { jabatanAction, jabatanDeleteAction } from "../../config/actions/jabatan";
import CreateJabatan from "./Create";
import { connect } from "react-redux";
import NumberFormat from 'react-number-format';
import swal from "sweetalert";
import Axios from "axios";

const mapStateToProps = (state) => {
  return {
    getJabatanList: state.jabatan.getJabatanList,
    errorJabatanList: state.jabatan.errorJabatanList,
  };
};

const hapusJabatan = (dispatch,id) => {
  swal({
    title: "Are you sure?",
    text: "Jika Jabatan dihapus, maka Jabatan ini akan menghilang dari data karyawan",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      // Axios
      // .delete(`http://localhost:4000/v1/hrd/jabatan/${id}`)
      // .then(function (response) {
      //   // handle success
      //   console.log(response);
      // })
      // .catch(function (error) {
      //   // handle error
      //   console.log(error);
      // });
      dispatch(jabatanDeleteAction(id))
      swal("Data Jabatan telah di hapus!", {
        icon: "success",
      });
      // window.location.reload(false);
    } else {
      swal("Periksa kembali sebelum menghapus data");
    }
  });
}

class Jabatan extends Component {
  componentDidMount() {
    this.props.dispatch(jabatanAction());
  }
  render() {
    const jabatan = this.props.getJabatanList.data;
    // console.log("response jabatan: ", jabatan);
    return (
      <div className="container">
        <Gap height={30} />
        <h1>Jabatan</h1>
        <h5 className="text-muted">
          Data terkait jabatan dapat dilihat dengan klik Lihat Data
        </h5>

        <Gap height={20} />
        <div className="row">
          <CreateJabatan />
          <table className="table ml-3 mt-4 shadow p-3 mb-5 bg-white rounded">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nama Jabatan</th>
                <th scope="col">Upah Per Hari</th>
                <th scope="col">Rata-rata Upah Per Bulan</th>
                <th scope="col">Action</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              
            {jabatan && jabatan.map((getJabatanList) => (
                <tr>
                  <th scope="row"></th>
                  <td>{getJabatanList.nama_jab}</td>
                  <td><NumberFormat value={getJabatanList.upahPerHari} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} suffix={',-'} /></td>
                  <td><NumberFormat value={getJabatanList.upahRataPerBulan} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} suffix={',-'} /></td>
                  <td>
                    <div className="">
                        <Button color="warning" className="mr-2">
                          <FontAwesomeIcon icon={faEdit} />
                        </Button>
                        <Button color="danger" className="mr-2" onClick={() => hapusJabatan(this.props.dispatch._id)}>
                          <FontAwesomeIcon icon={faTrash} />
                        </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default connect(mapStateToProps)(Jabatan);
