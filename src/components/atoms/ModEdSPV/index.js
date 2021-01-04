import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ModalEdSPV = (props) => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Link color="danger" onClick={toggle}>
        {buttonLabel}
      </Link>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Form Nilai SPV</ModalHeader>
        <ModalBody>
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="Radios" id="radio1" value="option1" />
            <label className="form-check-label" for="radio1">1</label>
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

export default ModalEdSPV;
