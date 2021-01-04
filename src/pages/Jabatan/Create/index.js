import React, { useState } from "react";
import { Button, Col, Input, Label } from "reactstrap";
import { Gap } from "../../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import Axios from "axios";
import swal from "sweetalert";
import addNotification from "react-push-notification";
import { useHistory } from "react-router-dom";
import NumberFormat from "react-number-format";

const CreateJabatan = () => {
  const [nama_jab, setNamaJab] = useState("");
  const [upahPerHari, setUpahPerHari] = useState("");
  const [upahRataPerBulan, setUpahRataPerBulan] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  const changeKategori = (e) => {
    const value = e.target.value;
    setNamaJab(value);
    setError("");
  };
  const changeUph = (e) => {
    const value = e.target.value;
    setUpahPerHari(value);
    setError("");
  };
  const changeRata = (e) => {
    const value = e.target.value;
    setUpahRataPerBulan(value);
    setError("");
  };

  const submitJabatan = () => {
    const data = {
      nama_jab: nama_jab,
      upahPerHari: upahPerHari,
      upahRataPerBulan: upahRataPerBulan,
    };
    // console.log(data);
    Axios.post("http://localhost:4000/v1/hrd/jabatan", data)
      .then((result) => {
        if (result) {
          if (result.data) {
            setNamaJab("");
            setUpahPerHari("");
            setUpahRataPerBulan("");
            swal("Berhasil !", result.data.message, "success");
            history.push("/jabatan");
            addNotification({
              title: "Tambah Jabatan Berhasil !!!",
              message: result.data.message,
              // icon: "https://cdn.worldvectorlogo.com/logos/pwa-logo.svg",
              theme: "darkblue",
              native: true,
              duration: 30000, // when using native, your OS will handle theming.
            });
          }
        }
      })
      .catch((error) => {
        setError(error.response.data.message);
      });
  };

  return (
    <Col md={5}>
      {error && (
        <div className="alert alert-danger">
          <p>{error}</p>
        </div>
      )}
      <Label for="kategori">Kategori :</Label>
      <Input
        type="text"
        name="kategori"
        id="kategori"
        value={nama_jab}
        onChange={changeKategori}
      />
      <Gap height={20} />
      <Label for="uph">Updah Per Hari :</Label>
      <NumberFormat
        thousandSeparator={true}
        prefix={"Rp."}
        className="input-group"
        name="uph"
        id="uph"
        value={upahPerHari}
        onChange={changeUph}
      />
      <Gap height={20} />
      <Label for="rata-rata">Rata - rata Upah Per Bulan :</Label>
      <NumberFormat
        thousandSeparator={true}
        prefix={"Rp."}
        className="input-group"
        name="rata-rata"
        id="rata-rata"
        value={upahRataPerBulan}
        onChange={changeRata}
      />
      <Gap height={20} />

      <Button color="dark" className="mr-2" onClick={submitJabatan}>
        <FontAwesomeIcon icon={faUserAlt} /> Tambah Jabatan
      </Button>
      <Gap height={50} />
    </Col>
  );
};

export default CreateJabatan;
