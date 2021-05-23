import { faEdit, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Axios from "axios";
import React, { Fragment, useEffect } from "react";
import { confirmAlert } from "react-confirm-alert";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Col } from "reactstrap";
import { Button, Gap } from "../../../components";
import { setDataDepartemen } from "../../../config/redux/action/departemenAction";
import { API, API_URL } from "../../../config/utils/constants";
import './carddep.scss'

const DepartemenCard = () => {
  const history = useHistory();
  const { dataDepartemen } = useSelector((state) => state.departemenReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDataDepartemen());
  }, [dispatch]);


  // harus _id tidak bisa id
  const confirmDelete = (_id) => {
    confirmAlert({
      title: "Hapus Departemen",
      message: "Apakah Anda yakin akan menghapus Data Departemen ini ?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            // console.log(_id);
            Axios.delete(`${API_URL}departemen/${_id}`)
              .then((res) => {
                console.log("berhasil menghapus Departemen", res.data);
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
  };
  return (
    <Fragment>
      <h1>Departemen</h1>
      <h5 className="text-muted">Data terkait Departemen dapat dilihat dengan klik <span className="text-info">Lihat Data</span></h5>
      <Gap height={20} />
      <p className="btn btn-primary" onClick={()=> history.push('/departemen/tambah-departemen')}>
        <FontAwesomeIcon icon={faPlus} /> Tambah Departemen
      </p>

      <div className="row">
        {dataDepartemen.map((departemen) => (
          <Col md={4} xs={6}>
            <div className="card-dep mb-4">
              <img
                className="card-img-top card-dep-img"
                src={`${API}${departemen.image}`}
                alt="departemen"
              />
              <div className="card-body">
                <h5 className="card-title">{departemen.nama_dep}</h5>
                <Button
                  onClick={() => history.push(`/departemen/${departemen._id}`)}
                  title="Lihat Data"
                />
                <button className="btn btn-danger ml-2 float-right" onClick={() => confirmDelete(departemen._id)}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
                <button className="btn btn-warning ml-2 float-right"  onClick={() =>
                        history.push(`/departemen/edit-departemen/${departemen._id}`)
                      }>
                  <FontAwesomeIcon icon={faEdit} />
                </button>
              </div>
            </div>
          </Col>
        ))}
      </div>
    </Fragment>
  );
};

export default DepartemenCard;
