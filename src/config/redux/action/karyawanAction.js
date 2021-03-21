import Axios from "axios";
import { API_URL } from "../../utils/constants";

export const setDataKaryawan = () => (dispatch) => {
  Axios.get(`${API_URL}karyawan`)
    .then((result) => {
      const responseAPI = result.data;
      // console.log('karyawan',responseAPI);
      dispatch({ type: "UPDATE_DATA_KARYAWAN", payload: responseAPI.data });
    })
    .catch((err) => {
      console.log("error", err);
    });
};
