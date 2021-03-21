import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ModalNilaiSpv = (props) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div className="btn btn-primary">
      <Link style={{color: "white"}} onClick={toggle}>Lihat Saran</Link>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Form Periode</ModalHeader>
        <ModalBody>
        <form>
          <div class="row">
            <div class="col">
              
              <label for="value1">Masukan / Saran 1</label>
              <input class="form-control" id="value1" type="textarea" value={props.value1} />
              <br/>
              <label for="value2">Masukan / Saran 2</label>
              <input class="form-control" id="value2" type="textarea" value={props.value2} />
              <br/>
              <label for="value3">Masukan / Saran 3</label>
              <input class="form-control" id="value3" type="textarea" value={props.value3} />
              <br/>
              <label for="value4">Masukan / Saran 4</label>
              <input class="form-control" id="value4" type="textarea" value={props.value4} />
              <br/>
            </div>
          </div>
        </form>

        </ModalBody>
        <ModalFooter>
          <button className="btn btn-secondary" onClick={toggle}>
            Tutup
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalNilaiSpv;
