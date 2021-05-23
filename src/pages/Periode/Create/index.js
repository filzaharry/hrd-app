import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { postToAPIPeriode, setPeriodeForm } from "../../../config/redux/action";


const ModalCreate = (props) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const {form} = useSelector(state => state.createPeriodeReducer);
  const {periodeKe, tglMulai, tglSelesai} = form;
  const dispatch = useDispatch();
  // const [error, setError] = useState("");
  
  const id = useParams();
  const submitPeriode = () => {
    setModal(!modal)
    postToAPIPeriode(form, id.id)
    
  }

  return (
    <div className="btn btn-primary">
      <Link style={{color: "white"}} onClick={toggle}>Tambah Periode</Link>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Form Periode</ModalHeader>
        {/* {error && (
            <div className="alert alert-danger">
              <p>{error}</p>
            </div>
          )} */}
        <ModalBody>
        <div className="form-group">
            <label for="periodeKe">Periode Ke -</label>
            <input class="form-control" id="periodeKe" 
            onChange={(e)=> dispatch(setPeriodeForm('periodeKe', e.target.value))}
            value={periodeKe}
            type="number"  />
        </div>
        <div className="form-group">
            <label for="tglMulai">Tanggal Mulai</label>
            <input class="form-control" id="tglMulai" 
            onChange={(e)=> dispatch(setPeriodeForm('tglMulai', e.target.value))}
            value={tglMulai}
            type="date"  />
        </div>
        <div className="form-group">
            <label for="tglSelesai">Tanggal Selesai</label>
            <input class="form-control" id="tglSelesai" 
            onChange={(e)=> dispatch(setPeriodeForm('tglSelesai', e.target.value))}
            value={tglSelesai}
            type="date"  />
        </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={submitPeriode}>
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

export default ModalCreate;
