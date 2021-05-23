import {
  faEdit,
  faInfo,
  faSearch,
  faTrash,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Gap } from "../../../components";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { setDataKaryawan } from "../../../config/redux/action";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { API, API_URL } from "../../../config/utils/constants";
import Axios from "axios";
import './table.scss'

const TableKaryawan = () => {
  const history = useHistory();
  const { dataKaryawan } = useSelector((state) => state.karyawanReducer);
  const [filterKaryawan, setFilterKaryawan] = useState([]);
  const [search, setSearch] = useState("")
  const dispatch = useDispatch();
  const [mode, setMode] = useState('online');

  useEffect(() => {
    dispatch(setDataKaryawan());
  }, [dispatch]);

  useEffect(() => {
    setFilterKaryawan(
      dataKaryawan.filter((karyawan) =>
        karyawan.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, dataKaryawan, setMode]);

  const confirmDelete = (_id) => {
    confirmAlert({
      title: "Hapus Karyawan",
      message:
        "Menghapus Data Karyawan akan menghapus seluruh riwayat nilai Karyawan, Hati-hati!",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            // console.log(_id);
            Axios.delete(`${API_URL}/karyawan/${_id}`)
              .then((res) => {
                console.log("berhasil menghapus", res.data);
                // dispatch(setDataKaryawan)
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
    <div className="container">
      <div>
        {
          mode==='offline' ?
          <div className="alert alert-warning">Anda berada dalam mode offline</div>
          : null
        }
      </div>
      <h1>Data Karyawan</h1>
      <h5 className="text-muted">
        Untuk melihat profile masing-masing karyawan klik action{" "}
        <span className="text-info">Detail</span>
      </h5>
    
      <Gap height={20} />

      <div className="col-lg-12">
        <div className="row ">
        <p className="btn btn-primary mr-2" onClick={() => history.push("/karyawan/tambah-karyawan")}>
          <FontAwesomeIcon icon={faUserPlus} /> Tambah Karyawan
        </p>
        
        {/* <!-- Actual search box --> */}
        <div className="form-group has-search col-lg-4 ml-4 pl-4">
          <span className="form-control-feedback text-dark" style={{position: "absolute", marginTop: "10px",marginLeft: "270px"}}><FontAwesomeIcon icon={faSearch}/></span>
          <input onChange={(e) => setSearch(e.target.value)} type="text" className="form-control" placeholder="Cari Karyawan" />
        </div>
      </div>
      <Gap height={20} />
      </div>
      <h4>Total Karyawan : {dataKaryawan.length}</h4>
      <div class=" table-hover shadow bg-white table-responsive">
        <table class="table rounded-top">
          <thead className="thead">
            <tr>
              <th></th>
              <th scope="col" colSpan="2">Nama Karyawan</th>
              <th scope="col">NIK</th>
              <th scope="col">Jabatan</th>
              <th scope="col">Departemen</th>
              <th scope="col">Tanggal Masuk</th>
              <th scope="col">Tombol Pilihan</th>
            </tr>
          </thead>
          <tbody>
            {filterKaryawan.map((karyawan) => (
              <tr key={karyawan._id}>
                <td></td>
                <td><img className="gambar-karyawan" src={`${API}${karyawan.image}`} alt= {karyawan.image} /></td>
                <td className="td">{karyawan.name}</td>
                <td className="td text-success">APK.{karyawan.nik}</td>
                <td className="td">{karyawan.jabatanId.nama_jab}</td>
                <td className="td">{karyawan.departemenId.nama_dep}</td>
                <td className="td">
                  {moment(karyawan.tglMulai).subtract(10, "days").calendar()}
                </td>

                <td>
                  <p
                    onClick={() =>
                      history.push(`/karyawan/profile/${karyawan._id}`)
                    }
                    className="btn btn-info"
                  >
                    <FontAwesomeIcon icon={faInfo} />
                  </p>
                  <p
                    onClick={() =>
                      history.push(`/karyawan/edit/${karyawan._id}`)
                    }
                    className="ml-2 btn btn-warning "
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </p>
                  <p
                    onClick={() => confirmDelete(karyawan._id)}
                    className="ml-2 btn btn-danger "
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableKaryawan;
