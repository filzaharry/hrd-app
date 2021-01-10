import Axios from "axios";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { API_URL } from "../../../config/utils/constants";

const ModalTambahPeriode = () => {
  const [modal, setModal] = useState(false);
  const [periode, setPeriode] = useState('');
  const [tglMulai, setTglMulai] = useState('')
  const [tglSelesai, setTglSelesai] = useState('');
  const [error, setError] = useState("");

  const changePeriode = (e) => {
    const value = e.target.value
    setPeriode(value);
    setError("");
  }
  const changeTglMulai = (e) => {
    const value = e.target.value
    setTglMulai(value);
    setError("");
  }
  const changeTglSelesai = (e) => {
    const value = e.target.value
    setTglSelesai(value);
    setError("");
  }

const id = useParams();
  const toggle = () => {
    // console.log(id);
    setModal(!modal)
    const data = {
      periode: periode,
      tglMulai: tglMulai,
      tglSelesai: tglSelesai,
    }
    Axios
      .post(`${API_URL}karyawan/${id.id}`, data)
      .then((result) => {
        if (result) {
          if (result.data) {
            setPeriode("");
            setTglMulai("");
            setTglSelesai("");
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
  }


  return (
    <div className="btn btn-primary">
      <Link style={{color: "white"}} onClick={toggle}>Tambah Periode</Link>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Form Periode</ModalHeader>
        <ModalBody>
        <div className="form-group">
            <label for="periode">Periode Ke</label>
            <input class="form-control" id="periode" type="number" onChange={changePeriode} />
        </div>
        <div className="form-group">
            <label for="periode">Tanggal Mulai</label>
            <input class="form-control" id="periode" type="date" onChange={changeTglMulai} />
        </div>
        <div className="form-group">
            <label for="periode">Tanggal Selesai</label>
            <input class="form-control" id="periode" type="date" onChange={changeTglSelesai} />
        </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Simpan
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Tidak
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalTambahPeriode;
