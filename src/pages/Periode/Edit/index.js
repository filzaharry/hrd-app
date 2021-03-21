import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { setPeriodeForm, updateToAPIPeriode } from "../../../config/redux/action";
import { API_URL } from "../../../config/utils/constants";


const ModalEdit = (props) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const {form} = useSelector(state => state.createPeriodeReducer);
  const {periodeKe, tglMulai, tglSelesai} = form;
  const dispatch = useDispatch();
  // const [error, setError] = useState("");
  
  useEffect(()=> {
    const id = props.match.params.id;
    Axios.get(`${API_URL}periode/${id}`)
    .then( res => {
      const data = res.data.data;
      console.log('res', data);
      dispatch(setPeriodeForm("tglMulai", data.tglMulai))
      dispatch(setPeriodeForm("tglSelesai", data.tglSelesai))

    })
    .catch( err => {
      console.log('err', err);
    })
  }, [dispatch, props])

  const submitPeriode = () => {
    const id = props.match.params.id;
    setModal(!modal)
    updateToAPIPeriode(form, id)
    window.location.reload()
  }

  return (
    <Fragment>
      <p className="btn btn-warning mr-2" onClick={toggle}>Ubah Data Periode</p>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Ubah Data Periode</ModalHeader>
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
            Update 
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Batal
          </Button>
        </ModalFooter>
      </Modal>
    </Fragment>
  );
};

export default withRouter(ModalEdit);
