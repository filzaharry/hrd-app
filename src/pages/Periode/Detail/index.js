import { faCheck, faPrint, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Gap } from "../../../components";
import moment from "moment";
import ModalEditPeriode from "../Edit";
import swal from "sweetalert";
import { API_URL } from "../../../config/utils/constants";

const DetailPeriode = (props) => {
  const history = useHistory();
  const [data, setData] = useState({});
  useEffect(() => {
    const id = props.match.params.id;
    // console.log(id);
    Axios.get(`${API_URL}periode/${id}`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }, [props]);
  console.log(data);

  const handleRemove = () => {
    const id = props.match.params.id;
    swal({
      title: "Are you sure?",
      text: "Jika Nilai dihapus, maka seluruh data nilai terkait akan terhapus",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        // console.log(spvId);
        Axios.delete(`${API_URL}periode/${id}`)
          .then((res) => {
            setData(res.data.data);
          })
          .catch((err) => {
            console.log("err: ", err);
          });
        swal("Data Nilai telah di hapus!", {
          icon: "success",
        });
        //    history.push('/periode');
      } else {
        swal("Periksa kembali sebelum menghapus data");
      }
    });
  };

  return (
    <Fragment>
      <div className="container-fluid">
        <h3>Detail Periode</h3>
        <h5>Menampilkan secara detail data Periode</h5>
        <Gap height={20} />
        <div className="col">
        <ModalEditPeriode />
        <button className="btn btn-danger" onClick={handleRemove}>
          <FontAwesomeIcon icon={faTrash} /> Hapus
        </button>
        <button className="btn btn-primary ml-2">
          <FontAwesomeIcon icon={faPrint} /> Cetak
        </button>

        <Gap height={20} />
        <div className="row">
          <div className="col-lg-2">
            <p>Tanggal Mulai</p>
            <p>Tanggal Selesai</p>
            <p>Nilai HRD</p>
            <p>Nilai SPV</p>
            <p>Total Nilai</p>
            <p>Status</p>
          </div>
          <div className="col-lg-10">
            <p>{moment(data.tglMulai).format("LL")}</p>
            <p>{moment(data.tglSelesai).format("LL")}</p>
            <p
              style={{ cursor: "pointer" }}
              className="text-primary"
              onClick={() => history.push(`${data._id}/nilaihrd`)}
            >
              Lihat Nilai
            </p>
            <p
              style={{ cursor: "pointer" }}
              className="text-primary"
              onClick={() => history.push(`${data._id}/nilaispv`)}
            >
              Lihat Nilai
            </p>
            <p>{data.totalNilai}</p>
            <p className="text-info">
              <FontAwesomeIcon icon={faCheck} /> {data.status}
            </p>
          </div>
        </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DetailPeriode;
