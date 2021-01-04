import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ModalEdHRD = (props) => {
  const { buttonLabel, className } = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [periode, setPeriode] = useState("");
  const [tglMulai, setTglMulai] = useState("");
  const [tglSelesai, setTglSelesai] = useState("");
  const [izin, setIzin] = useState("");
  const [setengahHari, setSetengahHari] = useState("");
  const [sakit, setSakit] = useState("");
  const [alpa, setAlpa] = useState("");

  const changePeriode = (e) => {
    console.log(e.target.value);
    const value = e.target.value;
    setPeriode(value);
  };
  const changeTglMulai = (e) => {
    console.log(e.target.value);
    const value = e.target.value;
    setTglMulai(value);
  };
  const changeTglSelesai = (e) => {
    console.log(e.target.value);
    const value = e.target.value;
    setTglSelesai(value);
  };
  const changeIzin = (e) => {
    console.log(e.target.value);
    const value = e.target.value;
    setIzin(value);
  };
  const changeSetengahHari = (e) => {
    console.log(e.target.value);
    const value = e.target.value;
    setSetengahHari(value);
  };
  const changeSakit = (e) => {
    console.log(e.target.value);
    const value = e.target.value;
    setSakit(value);
  };
  const changeAlpa = (e) => {
    console.log(e.target.value);
    const value = e.target.value;
    setAlpa(value);
  };

  const submitNilaiHRD = () => {
    setModal(!modal);
    const data = {
      periode: periode,
      tglMulai: tglMulai,
      tglSelesai: tglSelesai,
      izin: izin,
      setengahHari: setengahHari,
      sakit: sakit,
      alpa: alpa,
    };
    console.log("data", data);
  };

  return (
    <Fragment>
      <Link color="danger" onClick={toggle} className="text-light">
        {buttonLabel}
      </Link>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Form Nilai HRD</ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label for="periode">Periode</label>
            <select
              id="periode"
              class="form-control"
              value={periode}
              onChange={changePeriode}
            >
              <option selected>Choose...</option>
              <option>3 Bulan ( Training )</option>
              <option>1 Tahun ( Kontrak )</option>
            </select>
          </div>
          <div className="form-group">
            <label for="tglMulai">Mulai Kontrak</label>
            <input
              type="date"
              class="form-control"
              id="tglMulai"
              value={tglMulai}
              onChange={changeTglMulai}
            />
          </div>
          <div className="form-group">
            <label for="tglSelesai">Selesai Kontrak</label>
            <input
              type="date"
              class="form-control"
              id="tglSelesai"
              value={tglSelesai}
              onChange={changeTglSelesai}
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
            Simpan
          </Button>{" "}
          <Button color="secondary" onClick={submitNilaiHRD}>
            Tidak
          </Button>
        </ModalFooter>
      </Modal>
    </Fragment>
  );
};

export default ModalEdHRD;
