const RegisterValidation = (values) => {
    const errors = {};
  
    if (!values.nama || values.nama === "") {
      errors.nama = "Nama harus diisi";
    }
  
    if (!values.nik || values.nik === "") {
      errors.nik = "nik harus diisi";
    }
  
    if (!values.jabatan || values.jabatan === "") {
      errors.jabatan = "jabatan harus diisi";
    }
  
    if (!values.departemen || values.departemen === "") {
      errors.departemen = "Departemen harus diisi";
    }
  
    return errors;
  };
  
  export default RegisterValidation;
  