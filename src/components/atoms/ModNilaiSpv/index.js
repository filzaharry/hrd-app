import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ModalTambahPeriode = (props) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div className="btn btn-primary">
      <Link style={{color: "white"}} onClick={toggle}><FontAwesomeIcon icon={faInfo} /> Detail</Link>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Form Periode</ModalHeader>
        <ModalBody>
        <form>
          <div class="row">
            <div class="col">
              <label for="value1">Hasil Kerja</label>
              <input class="form-control" id="value1" type="number" value={props.value1} />
              <br/>
              <label for="value2">Keterampilan Kerja</label>
              <input class="form-control" id="value2" type="number" value={props.value2} />
              <br/>
              <label for="value3">Tanggung Jawab</label>
              <input class="form-control" id="value3" type="number" value={props.value3} />
              <br/>
              <label for="value4">Kerjasama</label>
              <input class="form-control" id="value4" type="number" value={props.value4} />
              <br/>
              <label for="value5">Disiplin</label>
              <input class="form-control" id="value5" type="number" value={props.value5} />
            </div>
            <div class="col">
              <label for="value6">Kerajinan</label>
              <input class="form-control" id="value6" type="number" value={props.value6} />
              <br/>
              <label for="value7">Ketelitian</label>
              <input class="form-control" id="value7" type="number" value={props.value7} />
              <br/>
              <label for="value8">Kejujuran</label>
              <input class="form-control" id="value8" type="number" value={props.value8} />
              <br/>
              <label for="value9">Loyalitas</label>
              <input class="form-control" id="value9" type="number" value={props.value9} />
              <br/>
              <label for="value10">Rekomendasi SPV</label>
              <input class="form-control" id="value10" type="number" value={props.value10} />
            </div>
          </div>
          <br/>
          <div class="row">
            <div class="col">
              
              <label for="value11">Masukan / Saran 1</label>
              <input class="form-control" id="value11" type="textarea" value={props.value11} />
              <br/>
              <label for="value12">Masukan / Saran 2</label>
              <input class="form-control" id="value12" type="textarea" value={props.value12} />
              <br/>
              <label for="value13">Masukan / Saran 3</label>
              <input class="form-control" id="value13" type="textarea" value={props.value13} />
              <br/>
              <label for="value14">Masukan / Saran 4</label>
              <input class="form-control" id="value14" type="textarea" value={props.value14} />
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

export default ModalTambahPeriode;
