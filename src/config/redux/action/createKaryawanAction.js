import Axios from "axios";
import { API_URL } from "../../utils/constants";

export const setForm = (formType, formValue) => {
  return { type: "SET_FORM_DATA", formType, formValue };
};

export const setImgPreview = (payload) => {
  return { type: "SET_IMG_PREVIEW", payload };
};


//  CREATE AND UPDATE ACTION 

export const postToAPI = (form) => {
    const data = new FormData();
    data.append('image', form.image);
    data.append('name', form.name);
    data.append('nik', form.nik);
    data.append('departemen', form.departemen);
    data.append('jabatan', form.jabatan);
    data.append('cv', form.cv);
    data.append('gender', form.gender);
    data.append('tglLahir', form.tglLahir);
    data.append('tempatLahir', form.tempatLahir);
    data.append('agama', form.agama);
    data.append('tglMulai', form.tglMulai);
    data.append('porto', form.porto);
    data.append('alamat', form.alamat);

  Axios.post(`${API_URL}karyawan`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    }
  })
    .then((res) => {
      console.log("tambah karyawan sukses :", res);
    })
    .catch((err) => {
      console.log("err :", err);
    });
};


export const updateToAPI = (form, id) => {
  const data = new FormData();
  data.append('image', form.image);
  data.append('name', form.name);
  data.append('nik', form.nik);
  data.append('departemen', form.departemen);
  data.append('jabatan', form.jabatan);
  data.append('cv', form.cv);
  data.append('gender', form.gender);
  data.append('tglLahir', form.tglLahir);
  data.append('tempatLahir', form.tempatLahir);
  data.append('agama', form.agama);
  data.append('tglMulai', form.tglMulai);
  data.append('porto', form.porto);
  data.append('alamat', form.alamat);

Axios.put(`${API_URL}karyawan/${id}`, data, {
  headers: {
    "Content-Type": "multipart/form-data",
  }
})
  .then((res) => {
    console.log("Ubah data karyawan sukses :", res);
  })
  .catch((err) => {
    console.log("err :", err);
  });
}
