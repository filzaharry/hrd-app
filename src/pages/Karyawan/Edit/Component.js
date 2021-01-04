import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { Button, Col, FormGroup, Input, Label, Row } from "reactstrap";
import KaryawanValidation from "../../../config/validation/karyawan";
import addNotification from 'react-push-notification';

const buttonClick = () => {
  addNotification({
      title: 'Berhasil !!!',
      subtitle: 'Karyawan diupdate',
      message: 'Karyawan telah diUpdate dari daftar karyawan',
      theme: 'darkred',
      native: true,
      duration: 30000,  // when using native, your OS will handle theming.
  });
};

const renderField = ({
  input,
  type,
  placeholder,
  label,
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
    initialValues : {
      image : state.karyawan.getKaryawanDetail.image,
      name : state.karyawan.getKaryawanDetail.name,
      nik : state.karyawan.getKaryawanDetail.nik,
      jabatan : state.karyawan.getKaryawanDetail.jabatan,
      departemen : state.karyawan.getKaryawanDetail.departemen,
      kontrak : state.karyawan.getKaryawanDetail.kontrak,
      tglMulai : state.karyawan.getKaryawanDetail.tglMulai,
      tglSelesai : state.karyawan.getKaryawanDetail.tglSelesai,
      tempatLahir : state.karyawan.getKaryawanDetail.tempatLahir,
      tglLahir : state.karyawan.getKaryawanDetail.tglLahir,
      gender : state.karyawan.getKaryawanDetail.gender,
      agama : state.karyawan.getKaryawanDetail.agama,
      alamat : state.karyawan.getKaryawanDetail.alamat,
      porto : state.karyawan.getKaryawanDetail.porto,
      cv : state.karyawan.getKaryawanDetail.cv
    }
  };
};

class FormKaryawan extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <FormGroup row>
          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="image"
                component={renderField}
                label="imageURL :"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="name"
                component={renderField}
                label="Nama :"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="nik"
                component={renderField}
                label="NIK :"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="jabatan"
                component={renderField}
                label="Jabatan :"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="departemen.nama_dep"
                component={renderField}
                label="Departemen :"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="kontrak"
                component={renderField}
                label="Masa Kontrak :"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="tglMulai"
                component={renderField}
                label="Mulai :"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="tglSelesai"
                component={renderField}
                label="Selesai :"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="tempatLahir"
                component={renderField}
                label="Tempat Lahir :"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="tglLahir"
                component={renderField}
                label="Tanggal Lahir :"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="gender"
                component={renderField}
                label="Gender :"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="agama"
                component={renderField}
                label="Agama :"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="alamat"
                component={renderField}
                label="Alamat :"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="cv"
                component={renderField}
                label="Upload CV :"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="porto"
                component={renderField}
                label="Upload Portofolio :"
              />
            </FormGroup>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Col md="12">
            <FormGroup>
              <Button
                onClick={buttonClick} 
                color="dark"
                type="submit"
                disabled={this.props.submitting}
              >
                Submit
              </Button>
            </FormGroup>
          </Col>
        </FormGroup>
      </form>
    );
  }
}

FormKaryawan = reduxForm({
  form: "formEditKaryawan",
  validate: KaryawanValidation,
  enableReinitialize: true,
})(FormKaryawan);

export default connect(mapStateToProps)(FormKaryawan);
