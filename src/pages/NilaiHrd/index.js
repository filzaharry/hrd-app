import { faEdit, faRedoAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment, useEffect, useState } from "react";
import { Back, Gap } from "../../components";
import { useHistory, useParams } from "react-router-dom";
import Axios from "axios";
import { API_URL } from "../../config/utils/constants";
import { Spinner } from "reactstrap";
import moment from "moment";
import ModalTambahNilaiHRD from "./Create";
import { confirmAlert } from "react-confirm-alert";

const NilaiHrd = (props) => {
  // kalo objeknya 1 pake {} kalo objeknya banyak(array) pakenya []
  const history = useHistory();
  const [data, setData] = useState([]);
  const { karyawanId } = useParams();
  
  useEffect(() => {
    const id = props.match.params.id;
    // console.log(id);
    Axios.get(`${API_URL}periode/${id}`)
      .then((res) => {
        setData(res.data.data);
        // console.log(res.data.data);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }, [props]);


  const submitDelete = (_id) => {
    // console.log(_id);
    confirmAlert({
      title: "Confirm to Delete",
      message: "Apakah Anda yakin akan menghapus Nilai ini ?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            // console.log(_id);
            Axios.delete(`${API_URL}nilaihrd/${_id}`)
              .then((res) => {
                console.log("berhasil menghapus Nilai HRD", res.data);
                window.location.reload();
              })
              .catch((err) => {
                console.log("gagal hapus", err);
              });
          },
        },
        {
          label: "No",
          onClick: () => alert("User Tidak Setuju"),
        },
      ],
    });
  }

  const hrd = data.nilaiHrdId;
  // console.log(hrd);

// console.log(karyawanId);
  return (
    <Fragment>
      {data ? (
        <div>
          <Back
            title="Kembali ke Periode"
            route="/karyawan/profile/periode/nilai-hrd"
            onClick={() =>
              history.push(
                `/karyawan/profile/${karyawanId}/periode`
              )
            }
          />
          <h2>Daftar Nilai dari Departemen HRD</h2>
          <h5 className="text-muted mt-2">
            {moment(data.tglMulai).format("LL")}
          </h5>
          <Gap height={20} />
          <div className="row">
            <div className="col ">
              <p className="btn btn-success">
                Nilai Total :{" "}
                {hrd &&
                  hrd
                    .map((nilaiHrd) => nilaiHrd.hasilAkhir)
                    .reduce((a, b) => a + b, 0)}
              </p>
              <p
                className="btn btn-outline-info ml-2"
                onClick={() => window.location.reload()}
              >
                <FontAwesomeIcon icon={faRedoAlt} />
              </p>
            </div>
            <div className="col text-right ">
              <div className="btn btn-primary">
                <ModalTambahNilaiHRD buttonLabel="Tambah Nilai" />
              </div>
            </div>
            <div className="table-hover table-responsive">
            <table class="table">
            <thead>
              <tr>
                <th scope="col">Tanggal Input</th>
                <th scope="col">Tanggal Diubah</th>
                <th scope="col">Masuk</th>
                <th scope="col">Setengah hari</th>
                <th scope="col">Izin</th>
                <th scope="col">Sakit</th>
                <th scope="col">Alpa</th>
                <th scope="col">Nilai</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {hrd &&
                hrd.map((nilaiHrd) => (
                  <tr>
                    <td>{moment(nilaiHrd.createdAt).format("LL")}</td>
                    <td>{moment(nilaiHrd.updatedAt).format("LL")}</td>
                    <td>{nilaiHrd.masuk}</td>
                    <td>{nilaiHrd.setengahHari}</td>
                    <td>{nilaiHrd.izin}</td>
                    <td>{nilaiHrd.sakit}</td>
                    <td className="text-danger">{nilaiHrd.alpa}</td>
                    <td>{nilaiHrd.hasilAkhir}</td>
                    <td>
                      {/* <p className="btn btn-info" onClick={() => history.push(`nilaihrd/${nilaiHrd._id}`)}
                      >
                       <FontAwesomeIcon icon={faInfo} />
                      </p> */}
                      <p className="btn btn-warning" onClick={()=> delete(nilaiHrd._id)}><FontAwesomeIcon icon={faEdit} /></p>
                      <p className="btn btn-danger" onClick={()=> submitDelete(nilaiHrd._id)}><FontAwesomeIcon icon={faTrash} /></p>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          </div>
          </div>

          
        </div>
      ) : (
        <div className="text-center mt-4">
          <Spinner type="grow" variant="warning" />
        </div>
      )}
    </Fragment>
  );
};

export default NilaiHrd;
