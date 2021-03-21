import Axios from "axios";
import { API_URL } from "../../utils/constants";

export const setDepartForm = (formType, formValue) => {
  return { type: "SET_FORM_DATA", formType, formValue };
};

export const setImgDepartPreview = (payload) => {
  return { type: "SET_IMG_PREVIEW", payload };
};


//  CREATE AND UPDATE ACTION 

export const postToAPIDepart = (form) => {
    const data = new FormData();
    data.append('image', form.image);
    data.append('nama_dep', form.nama_dep);
    data.append('supervisor', form.supervisor);
    data.append('kategori', form.kategori);

  Axios.post(`${API_URL}departemen`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    }
  })
    .then((res) => {
      console.log("Departemen Baru Berhasil Ditambahkan :", res);
    })
    .catch((err) => {
      console.log("err :", err);
    });
};


export const updateToAPIDepart = (form, id) => {
  const data = new FormData();
  data.append('image', form.image);
  data.append('nama_dep', form.nama_dep);
  data.append('supervisor', form.supervisor);
  data.append('kategori', form.kategori);

Axios.put(`${API_URL}departemen/${id}`, data, {
  headers: {
    "Content-Type": "multipart/form-data",
  }
})
  .then((res) => {
    console.log("Ubah data Departemen sukses :", res);
  })
  .catch((err) => {
    console.log("err :", err);
  });
}
