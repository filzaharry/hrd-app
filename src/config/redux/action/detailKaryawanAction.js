import Axios from "axios";
import { API_URL } from "../../utils/constants";

export const setDetailKaryawan = (id) => (dispatch) => {
  Axios.get(`${API_URL}karyawan/${id}`)
    .then((result) => {
      const responseAPI = result.data;
      // console.log('karyawan',responseAPI);
      dispatch({ type: "DETAIL_DATA_KARYAWAN", payload: responseAPI.data });
    })
    .catch((err) => {
      console.log("error", err);
    });
};
