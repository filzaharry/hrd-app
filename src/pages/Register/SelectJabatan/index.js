import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDataJabatan } from "../../../config/redux/action";

const Jabatan = () => {
  const { dataJabatan } = useSelector((state) => state.jabatanReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDataJabatan())
  }, [dispatch]);

  return (
    <Fragment>
    {dataJabatan.map((jabatan) => (
        <option value={jabatan._id}>
          {jabatan.nama_jab}
        </option>
      ))}
  </Fragment>
  )
}

export default Jabatan
