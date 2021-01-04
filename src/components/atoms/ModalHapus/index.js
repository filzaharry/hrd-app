import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const CreateModal = (props) => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          Semua data karyawan ini akan terhapus selamanya, Apakah Anda ingin
          tetap Menghapus ?
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Ya, Hapus
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Tidak
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default CreateModal;
