import Axios from "axios";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { API_URL } from "../../../config/utils/constants";

const ModalEditNilaiHRD = (props) => {
  const { buttonLabel, className } = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);


  const [masuk, setMasuk] = useState("");
  const [izin, setIzin] = useState("");
  const [setengahHari, setSetengahHari] = useState("");
  const [sakit, setSakit] = useState("");
  const [alpa, setAlpa] = useState("");
  const [error, setError] = useState('');

  const changeMasuk = (e) => {
    const value = e.target.value;
    setMasuk(value);
    setError("")
  };
  const changeIzin = (e) => {
    const value = e.target.value;
    setIzin(value);
    setError("")
  };
  const changeSetengahHari = (e) => {
    const value = e.target.value;
    setSetengahHari(value);
    setError("")
  };
  const changeSakit = (e) => {
    const value = e.target.value;
    setSakit(value);
    setError("")
  };
  const changeAlpa = (e) => {
    const value = e.target.value;
    setAlpa(value);
    setError("")
  };
  // useParams ini prosesnya lama kalo udah yakin ya ga usah diotak atik lagi 
  // nanti id nya nongol sendiri
  // atau pancing dulu di <Modal id={const.id} />
  const id = useParams()
  const submitNilaiHRD = () => {
    setModal(!modal);
    const data = {
      masuk: masuk,
      izin: izin,
      setengahHari: setengahHari,
      sakit: sakit,
      alpa: alpa,
    };
    // console.log("data", id);
    Axios
    .put(`${API_URL}nilaihrd/${id.id}`, data)
    .then((result) => {
      if (result) {
        if (result.data) {
          setMasuk("")
          setIzin("")
          setSetengahHari("")
          setSakit("")
          setAlpa("")
          window.location.reload(false);
          // setAlert(result.data.message);
          // setTimeout(() => {
          //   setAlert("");
          // }, 3000);
        }
      }
    })
    .catch((error) => {
      setError(error.response.data.message);
    });
  };

  return (
    <div>
      <Link color="danger" onClick={toggle}>
        {buttonLabel}
      </Link>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Form Nilai HRD</ModalHeader>
        <p>{props.id}</p>
        {error && (
            <div className="alert alert-danger">
              <p>{error}</p>
            </div>
          )}
        <ModalBody>
          <div className="form-group">
            {/* validasi maksimal number 10 */}
            <label for="masuk">Masuk Kerja</label>
            <input
              type="number"
              class="form-control"
              id="masuk"
              value={masuk}
              onChange={changeMasuk}
            />
          </div>
          <div className="form-group">
            {/* validasi maksimal number 10 */}
            <label for="izin">Izin Kerja</label>
            <input
              type="number"
              class="form-control"
              id="izin"
              value={izin}
              onChange={changeIzin}
            />
          </div>
          <div className="form-group">
            {/* validasi maksimal number 10 */}
            <label for="setengahHari">Setengah Hari Kerja</label>
            <input
              type="number"
              class="form-control"
              id="setengahHari"
              value={setengahHari}
              onChange={changeSetengahHari}
            />
          </div>
          <div className="form-group">
            {/* validasi maksimal number 10 */}
            <label for="sakit">Sakit</label>
            <input
              type="number"
              class="form-control"
              id="sakit"
              value={sakit}
              onChange={changeSakit}
            />
          </div>
          <div className="form-group">
            {/* validasi maksimal number 10 */}
            <label for="alpa">Tanpa Keterangan</label>
            <input
              type="number"
              class="form-control"
              id="alpa"
              value={alpa}
              onChange={changeAlpa}
            />
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={submitNilaiHRD}>
            Simpan Perubahan
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalEditNilaiHRD;
