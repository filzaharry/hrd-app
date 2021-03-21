import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ImageDepartment } from "../../../assets";
import { Back, Gap, UploadImg } from "../../../components";
import { setDepartForm, setImgDepartPreview, updateToAPIDepart } from "../../../config/redux/action";
import { API, API_URL } from "../../../config/utils/constants";

const EditDepartemen = (props) => {
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

  useEffect(()=> {
    // console.log('params:', props)
    const id = props.match.params.id;
    Axios.get(`${API_URL}departemen/${id}`)
    .then( res => {
      const data = res.data.data;
      console.log('res', data);
      dispatch(setImgDepartPreview(`${API}${data.image}`))
      dispatch(setDepartForm("nama_dep", data.nama_dep))
      dispatch(setDepartForm("supervisor", data.supervisor))
      dispatch(setDepartForm("kategori", data.kategori))

    })
    .catch( err => {
      console.log('err', err);
    })
  }, [dispatch, props])

  const onSubmit = () => {
    const id = props.match.params.id
    updateToAPIDepart(form, id)
    history.push('/departemen')
  }
  return (
    <div className="container">
      <Back title="Kembali ke Departemen" onClick={()=> history.push('/departemen')} />
      <div className="row">
        <div className="col-lg-7">
          <h4>Edit Departemen</h4>
          <p className="text-danger">Gambar Harus di upload ulang</p>
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
              Ubah Departemen
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

export default EditDepartemen;
