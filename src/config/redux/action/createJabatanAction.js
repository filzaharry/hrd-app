import Axios from "axios";
import { API_URL } from "../../utils/constants";

export const setJabatanForm = (formType, formValue) => {
  return { type: "SET_FORM_DATA", formType, formValue };
};

//  CREATE AND UPDATE ACTION

export const postToAPIJabatan = (form) => {
  const data = new FormData();
  data.append("nama_jab", form.nama_jab);
  data.append("upahPerHari", form.upahPerHari);
  data.append("upahRataPerBulan", form.upahRataPerBulan);

  Axios.post(`${API_URL}jabatan`, data)
    .then((res) => {
      console.log("tambah jabatan sukses :", res);
    })
    .catch((err) => {
      console.log("err :", err);
    });
};

export const updateToAPIJabatan = (form, id) => {
  const data = new FormData();
  data.append("nama_jab", form.nama_jab);
  data.append("upahPerHari", form.upahPerHari);
  data.append("upahRataPerBulan", form.upahRataPerBulan);

  Axios.put(`${API_URL}jabatan/${id}`, data)
    .then((res) => {
      console.log("Ubah data jabatan sukses :", res);
    })
    .catch((err) => {
      console.log("err :", err);
    });
};
