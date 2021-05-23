import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDataDepartemen } from "../../../../config/redux/action/departemenAction";

const Departemen = () => {
  const { dataDepartemen } = useSelector((state) => state.departemenReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDataDepartemen())
  }, [dispatch]);

  return (
    <Fragment>
    {dataDepartemen.map((departemen) => (
        <option value={departemen._id} key={departemen._id}>
          {departemen.nama_dep}
        </option>
      ))}
  </Fragment>
  )
}

export default Departemen
