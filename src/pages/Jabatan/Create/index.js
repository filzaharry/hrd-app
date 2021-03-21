import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { BriefcaseJabatan } from "../../../assets";
import { Back, Gap } from "../../../components";
import { postToAPIJabatan, setJabatanForm } from "../../../config/redux/action";

const JabatanCreate = () => {
  const {form} = useSelector(state => state.createJabatanReducer);
  const {nama_jab, upahPerHari, upahRataPerBulan} = form;
  const dispatch = useDispatch();
  const history = useHistory()

  const onSubmit = () => {
    postToAPIJabatan(form)
    // belom auto reload
    history.push('/jabatan')
  }
  return (
    <div className="container">

    <Back title="Kembali ke Jabatan" onClick={()=> history.push('/jabatan')} />
    <div className="row">
      <div className="col-lg-7">
        <h4>Tambah Jabatan</h4>
        <Gap height={20} />
        <form>
          <div className="form-group">
            <label for="nama_jab">Nama Jabatan</label>
            <input
              type="text"
              className="form-control"
              id="nama_jab"
              onChange={(e)=> dispatch(setJabatanForm('nama_jab', e.target.value))}
              value={nama_jab}
              placeholder="Masukkan nama jabatan baru"
            />
          </div>
          <div className="form-group">
            <label for="upahPerHari">Upah Per Hari</label>
            <input
              type="number"
              className="form-control"
              id="upahPerHari"
              onChange={(e)=> dispatch(setJabatanForm('upahPerHari', e.target.value))}
              value={upahPerHari}
              placeholder="Nominal Upah"
            />
          </div>
          <div className="form-group">
            <label for="upahPerBulan">Upah Per Bulan</label>
            <input
              type="number"
              className="form-control"
              id="upahRataPerBulan"
              onChange={(e)=> dispatch(setJabatanForm('upahRataPerBulan', e.target.value))}
              value={upahRataPerBulan}
              placeholder="Nominal Upah"
            />
          </div>
          <button type="submit" className="btn btn-primary" onClick={onSubmit}>
            Simpan
          </button>
        </form>
      </div>
      <div className="col-lg-5">
        <img src={BriefcaseJabatan} alt="jabatan" />
      </div>
    </div>
    </div>
  );
};

export default JabatanCreate;
