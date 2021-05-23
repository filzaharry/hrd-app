import React, { useEffect } from "react";
import { faEdit, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Gap } from "../../../components";
import { Button } from "reactstrap";
import NumberFormat from "react-number-format";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setDataJabatan } from "../../../config/redux/action";
import Axios from "axios";
import { confirmAlert } from "react-confirm-alert";
import { API_URL } from "../../../config/utils/constants";

const JabatanTable = () => {
  const history = useHistory();
  const { dataJabatan } = useSelector((state) => state.jabatanReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDataJabatan());
  }, [dispatch]);

  // harus _id tidak bisa id
  const confirmDelete = (_id) => {
    confirmAlert({
      title: "Hapus Jabatan",
      message: "Apakah Anda yakin akan menghapus Data Jabatan ini ?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            // console.log(_id);
            Axios.delete(`${API_URL}jabatan/${_id}`)
              .then((res) => {
                console.log("berhasil menghapus Jabatan", res.data);
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
      <Gap height={30} />
      <h1>Jabatan</h1>
      <h5 className="text-muted">
        Untuk menambahkan jabatan , klik tombol tambah jabatan
      </h5>
      <Gap height={20} />
      <p
        className="btn btn-primary"
        onClick={() => history.push("/jabatan/tambah-jabatan")}
      >
        <FontAwesomeIcon icon={faPlus} /> Tambah Jabatan
      </p>
      <div className="row">
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
            {dataJabatan.map((jabatan) => (
              <tr>
                <th scope="row"></th>
                <td>{jabatan.nama_jab}</td>
                <td>
                  <NumberFormat
                    value={jabatan.upahPerHari}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"Rp."}
                    suffix={",-"}
                  />
                </td>
                <td>
                  <NumberFormat
                    value={jabatan.upahRataPerBulan}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"Rp."}
                    suffix={",-"}
                  />
                </td>
                <td>
                  <div className="">
                    <Button
                      color="warning"
                      className="mr-2"
                      onClick={() =>
                        history.push(`/jabatan/edit-jabatan/${jabatan._id}`)
                      }
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </Button>
                    <Button color="danger" className="mr-2" onClick={() => confirmDelete(jabatan._id)}>
                      <FontAwesomeIcon
                        icon={faTrash}
                        
                      />
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
};

export default JabatanTable;
