import Axios from "axios";
import React, { Fragment, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import swal from "sweetalert";
import { API_URL } from "../../../config/utils/constants";

const ModalTambahNilaiHRD = (props) => {
  const { buttonLabel, className } = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [masuk, setMasuk] = useState(0);
  const [izin, setIzin] = useState(0);
  const [setengahHari, setSetengahHari] = useState(0);
  const [sakit, setSakit] = useState(0);
  const [alpa, setAlpa] = useState(0);
  const [error, setError] = useState('');
 

  // Create handleIncrement event handler
  const plusMasuk = () => {
    setMasuk(prevCount => prevCount + 1);
    if(masuk > 30){
      alert("tidak ada 1 bulan lebih dari 31 hari")
      setMasuk(prevCount => prevCount - 1);
    }
  };

  //Create handleDecrement event handler
  const minusMasuk = () => {
      if(masuk > 0){
      setMasuk(prevCount => prevCount - 1);
      }
  };

// ======================================================================================

  // Create handleIncrement event handler
  const plusIzin = () => {
    setIzin(prevCount => prevCount + 1);
    if(izin > 3){
      alert("izin sudah melebihi batas")
    }
  };

  //Create handleDecrement event handler
  const minusIzin = () => {
      if(izin > 0){
      setIzin(prevCount => prevCount - 1);
      }
  };

  
// ======================================================================================

  // Create handleIncrement event handler
  const plusSetengahHari = () => {
    setSetengahHari(prevCount => prevCount + 1);
    if(setengahHari > 3){
      alert("izin setengah hari sudah melebihi batas")
    }
  };

  //Create handleDecrement event handler
  const minusSetengahHari = () => {
      if(setengahHari > 0){
      setSetengahHari(prevCount => prevCount - 1);
      }
  };

// ======================================================================================

  // Create handleIncrement event handler
  const plusSakit = () => {
    setSakit(prevCount => prevCount + 1);
    if(sakit > 3){
      alert("Karyawan sakit cukup parah")
    }
  };

  //Create handleDecrement event handler
  const minusSakit = () => {
      if(sakit > 0){
      setSakit(prevCount => prevCount - 1);
      }
  };

// ======================================================================================

  // Create handleIncrement event handler
  const plusAlpa = () => {
    setAlpa(prevCount => prevCount + 1);
    if(alpa > 3){
      alert("Lebih dari 3 hari tanpa keterangan, maka SP 1")
      setAlpa(prevCount => prevCount - 1);
    }
  };

  //Create handleDecrement event handler
  const minusAlpa = () => {
      if(alpa > 0){
      setAlpa(prevCount => prevCount - 1);
      }
  };


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
    console.log("data", id.id);
    Axios
    .post(`${API_URL}periode/${id.id}`, data)
    .then((result) => {
      if (result) {
        if (result.data) {
          setMasuk("")
          setIzin("")
          setSetengahHari("")
          setSakit("")
          setAlpa("")
          swal("Mantap!", result.data.message, "success");
          window.location.reload()
        }
      }
    })
    .catch((error) => {
      setError(error.response.data.message);
    });
  };

  return (
    <Fragment>
      <Link color="danger" onClick={toggle} className="text-light">
        {buttonLabel}
      </Link>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Form Nilai HRD</ModalHeader>
        {error && (
            <div className="alert alert-danger">
              <p>{error}</p>
            </div>
          )}
        <ModalBody>
          <div className="form-group">
            {/* validasi maksimal number 10 */}
          <label for="masuk">Jumlah Hari Kerja Bulan {props.bulan}</label>
            <div classname="form-row">
              <div className="counter form-group">
                  <button onClick={minusMasuk} className="minus btn btn-danger mx-auto" style={{width: "40px", marginTop: "-5px"}}><span className="font-weight-bold">-</span></button>
                  <input style={{height: "35px", margin: "2px", border: "1 solid grey", textAlign:"center"}} type="text" value={masuk} />
                  <button onClick={plusMasuk} className="plus btn btn-success mx-auto" style={{width: "40px", marginTop: "-5px"}}><span className="font-weight-bold">+</span></button>
              </div>
            </div>
          </div>


          <div className="form-group">
            {/* validasi maksimal number 10 */}
            <label for="izin">Izin Kerja</label>
            <div classname="form-row">
              <div className="counter form-group">
                  <button onClick={minusIzin} className="minus btn btn-danger mx-auto" style={{width: "40px", marginTop: "-5px"}}><span className="font-weight-bold">-</span></button>
                  <input style={{height: "35px", margin: "2px", border: "1 solid grey", textAlign:"center"}} type="text" value={izin} />
                  <button onClick={plusIzin} className="plus btn btn-success mx-auto" style={{width: "40px", marginTop: "-5px"}}><span className="font-weight-bold">+</span></button>
              </div>
            </div>
          </div>


          <div className="form-group">
            {/* validasi maksimal number 10 */}
            <label for="setengahHari">Setengah Hari Kerja</label>
            <div classname="form-row">
              <div className="counter form-group">
                  <button onClick={minusSetengahHari} className="minus btn btn-danger mx-auto" style={{width: "40px", marginTop: "-5px"}}><span className="font-weight-bold">-</span></button>
                  <input style={{height: "35px", margin: "2px", border: "1 solid grey", textAlign:"center"}} type="text" value={setengahHari} />
                  <button onClick={plusSetengahHari} className="plus btn btn-success mx-auto" style={{width: "40px", marginTop: "-5px"}}><span className="font-weight-bold">+</span></button>
              </div>
            </div>
          </div>


          <div className="form-group">
            {/* validasi maksimal number 10 */}
            <label for="sakit">Sakit</label>
            <div classname="form-row">
              <div className="counter form-group">
                  <button onClick={minusSakit} className="minus btn btn-danger mx-auto" style={{width: "40px", marginTop: "-5px"}}><span className="font-weight-bold">-</span></button>
                  <input style={{height: "35px", margin: "2px", border: "1 solid grey", textAlign:"center"}} type="text" value={sakit} />
                  <button onClick={plusSakit} className="plus btn btn-success mx-auto" style={{width: "40px", marginTop: "-5px"}}><span className="font-weight-bold">+</span></button>
              </div>
            </div>
          </div>
          <div className="form-group">
            {/* validasi maksimal number 10 */}
            <label for="alpa">Tanpa Keterangan</label>
            <div classname="form-row">
              <div className="counter form-group">
                  <button onClick={minusAlpa} className="minus btn btn-danger mx-auto" style={{width: "40px", marginTop: "-5px"}}><span className="font-weight-bold">-</span></button>
                  <input style={{height: "35px", margin: "2px", border: "1 solid grey", textAlign:"center"}} type="text" value={alpa} />
                  <button onClick={plusAlpa} className="plus btn btn-success mx-auto" style={{width: "40px", marginTop: "-5px"}}><span className="font-weight-bold">+</span></button>
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={submitNilaiHRD}>
            Simpan
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Tidak
          </Button>
        </ModalFooter>
      </Modal>
    </Fragment>
  );
};

export default ModalTambahNilaiHRD;
