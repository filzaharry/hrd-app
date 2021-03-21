import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ImageDepartment } from "../../../assets";
import { Back, Gap, UploadImg } from "../../../components";
import { postToAPIDepart, setDepartForm, setImgDepartPreview } from "../../../config/redux/action";

const CreateDepartemen = () => {
  const history = useHistory();
  const { form, imgPreview } = useSelector(
    (state) => state.createDepartemenReducer
  );
  const { nama_dep, supervisor, kategori } = form;
  const dispatch = useDispatch();

  const onImageUpload = (e) => {
    const file = e.target.files[0];
    dispatch(setDepartForm("image", file));
    dispatch(setImgDepartPreview(URL.createObjectURL(file)));
  };

  const onSubmit = () => {
    postToAPIDepart(form)
    // belom auto reload
    history.push('/departemen')
  }
  return (
    <div className="container">
      <Back title="Kembali ke Departemen" onClick={()=> history.push('/departemen')} />
      <div className="row">
        <div className="col-lg-7">
          <h4>Tambah Departemen</h4>
          <p className="text-danger">Gambar Harus di upload</p>
          <Gap height={20} />
          <form>
            {/* Upload */}
            <div className="form-group">
            <label for="nama_dep">Pilih Foto Departemen</label>
              <UploadImg onChange={(e) => onImageUpload(e)} img={imgPreview} />
            </div>

            {/* Input Nama Departemen */}
            <div className="form-group">
              <label for="nama_dep">Nama Departemen</label>
              <input
                type="text"
                className="form-control"
                id="nama_dep"
                onChange={(e) => dispatch(setDepartForm("nama_dep", e.target.value))}
                value={nama_dep}
                placeholder="Masukkan nama departemen baru"
              />
            </div>

            {/* Input Nama User sebagai Supervisor */}
            <div className="form-group">
              <label for="supervisor">Nama Supervisor</label>
              <input
                type="text"
                className="form-control"
                id="supervisor"
                onChange={(e) =>
                  dispatch(setDepartForm("supervisor", e.target.value))
                }
                value={supervisor}
                placeholder="Masukkan nama Supervisor"
              />
            </div>

            {/* Input Kategori */}
            <div className="form-group ">
              <label for="gender">Kategori</label>
              <select
                className="form-control"
                id="kategori"
                onChange={(e) => dispatch(setDepartForm("kategori", e.target.value))}
                value={kategori}
              >
                <option selected>Pilih Kategori...</option>
                <option>Management</option>
                <option>Production</option>
                <option>Support</option>
                <option>Delivery</option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary" onClick={onSubmit}>
              <FontAwesomeIcon icon={faPlus} />{" "}
              Buat Baru
            </button>
          </form>
        </div>
        <div className="col-lg-5">
          <img src={ImageDepartment} alt="departemen" />
        </div>
      </div>
    </div>
  );
};

export default CreateDepartemen;
