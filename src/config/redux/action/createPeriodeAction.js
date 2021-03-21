import Axios from "axios";
import { API_URL } from "../../utils/constants";

export const setPeriodeForm = (formType, formValue) => {
  return { type: "SET_FORM_DATA", formType, formValue };
};

//  CREATE AND UPDATE ACTION

export const postToAPIPeriode = (form, id) => {
  const data = new FormData();
  data.append("periodeKe", form.periodeKe);
  data.append("tglMulai", form.tglMulai);
  data.append("tglSelesai", form.tglSelesai);

  Axios.post(`${API_URL}karyawan/${id}`, data)
    .then((res) => {
      console.log("Tambah Periode Sukses :", res);
    })
    .catch((err) => {
      console.log("err :", err);
    });
};

export const updateToAPIPeriode = (form, id) => {
  const data = new FormData();
  data.append("periodeKe", form.periodeKe);
  data.append("tglMulai", form.tglMulai);
  data.append("tglSelesai", form.tglSelesai);

  Axios.put(`${API_URL}periode/${id}`, data)
    .then((res) => {
      console.log("Ubah Data Periode Karyawan Sukses :", res);
    })
    .catch((err) => {
      console.log("err :", err);
    });
};
