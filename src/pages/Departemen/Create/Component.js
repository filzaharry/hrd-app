import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import {
  Button,
  Col,
  FormGroup,
  FormText,
  Input,
  Label,
  Row,
} from "reactstrap";
import { connect } from "react-redux";
import KaryawanValidation from "../../../config/validation/karyawan";
import addNotification from "react-push-notification";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const buttonClick = () => {
  addNotification({
    title: "Berhasil !!!",
    subtitle: "Karyawan ditambahkan",
    message: "Karyawan telah ditambahkan ke daftar karyawan",
    theme: "darkblue",
    native: true,
    duration: 30000, // when using native, your OS will handle theming.
  });
};

const renderField = ({
  input,
  type,
  placeholder,
  label,
  select,
  disabled,
  readOnly,
  meta: { touched, error, warning },
}) => (
  <Row>
    <Col md="12">
      <Label htmlFor="{input}" className="col-form-label">
        {label}
      </Label>
    </Col>
    <Col md="12">
      <Input
        {...input}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
      ></Input>
      {touched &&
        ((error && <p style={{ color: "red" }}>{error}</p>) ||
          (warning && <p style={{ color: "brown" }}>{warning}</p>))}
    </Col>
  </Row>
);

const mapStateToProps = (state) => {
  return {
    initialValues: {
      image: state.karyawan.getKaryawanDetail.image,
      name: state.karyawan.getKaryawanDetail.name,
      nik: state.karyawan.getKaryawanDetail.nik,
      jabatan: state.karyawan.getKaryawanDetail.jabatan,
      departemen: state.karyawan.getKaryawanDetail.departemen,
      kontrak: state.karyawan.getKaryawanDetail.kontrak,
      tglMulai: state.karyawan.getKaryawanDetail.tglMulai,
      tglSelesai: state.karyawan.getKaryawanDetail.tglSelesai,
      tempatLahir: state.karyawan.getKaryawanDetail.tempatLahir,
      tglLahir: state.karyawan.getKaryawanDetail.tglLahir,
      gender: state.karyawan.getKaryawanDetail.gender,
      agama: state.karyawan.getKaryawanDetail.agama,
      alamat: state.karyawan.getKaryawanDetail.alamat,
      porto: state.karyawan.getKaryawanDetail.porto,
      cv: state.karyawan.getKaryawanDetail.cv,
    },
  };
};

class FormDepartemen extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <h5 className="text-muted">Registrasi Data Departemen</h5>
        <FormGroup row>
          {/* Upload Foto */}
          <Col md={6}>
            <FormGroup row>
              <Label for="image" sm={2} lg={12}>
                Upload Foto :
              </Label>
              <Col md={12}>
                <Input type="file" name="image" id="image" />
                <FormText color="muted">
                  Foto / Gambar harus memiliki format JPEG,JPG, atau PNG dengan
                  ukuran kurang dari 500 KB.
                </FormText>
              </Col>
            </FormGroup>
          </Col>
          {/* End Upload Foto */}

          {/* Label Nama Departemen */}
          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="name"
                component={renderField}
                label="Nama Departemen :"
                placeholder="Nama Departemen"
              />
            </FormGroup>
          </Col>
          {/* End Label Nama */}

          {/* Label Nama Supervisor*/}
          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="name"
                component={renderField}
                label="Nama Supervisor :"
                placeholder="Nama Supervisor"
              />
            </FormGroup>
          </Col>
          {/* End Label Nama */}

          {/* Label Kategori */}
          <Col md={6}>
            <FormGroup row>
              <Label for="kategori" sm={2} lg={12}>
                Kategori :
              </Label>
              <Col md={12}>
                <Input type="select" name="kategori" id="kategori">
                  <option />
                  {/* Mapping dari collection Jabatan */}
                  <option>Produksi</option>
                  <option>Manajemen</option>
                  <option>Pengiriman</option>
                  <option>Pendukung</option>
                </Input>
              </Col>
            </FormGroup>
          </Col>
          {/* End Label Kategori */}

          {/* Deskripsi Departemen */}
          <Col md={6}>
            <FormGroup row>
              <Label for="deskripsi" sm={2} lg={12}>
                Deskripsi :
              </Label>
              <Col md={12}>
                <Input type="textarea" name="deskripsi" id="deskripsi" />
              </Col>
            </FormGroup>
          </Col>
          {/* End Deskripsi Departemen */}

          <Col md="12">
            <FormGroup>
              <Button
                onClick={buttonClick}
                color="dark"
                type="submit"
                disabled={this.props.submitting}
              >
                <FontAwesomeIcon icon={faPlus} /> Tambah Departemen
              </Button>
            </FormGroup>
          </Col>
        </FormGroup>
      </form>
    );
  }
}

FormDepartemen = reduxForm({
  form: "formTambahKaryawan",
  validate: KaryawanValidation,
  enableReinitialize: true,
})(FormDepartemen);

export default connect(mapStateToProps)(FormDepartemen);
