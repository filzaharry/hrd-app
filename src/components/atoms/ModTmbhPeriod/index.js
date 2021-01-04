import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ModalTambahPeriode = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div className="btn btn-primary">
      <Link style={{color: "white"}} onClick={toggle}>Tambah Periode</Link>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Form Periode</ModalHeader>
        <ModalBody>
        <div className="form-group">
            <label for="periode">Periode Ke</label>
            <input class="form-control" id="periode" type="number" />
        </div>
        <div className="form-group">
            <label for="periode">Tanggal Mulai</label>
            <input class="form-control" id="periode" type="date" />
        </div>
        <div className="form-group">
            <label for="periode">Tanggal Selesai</label>
            <input class="form-control" id="periode" type="date" />
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
