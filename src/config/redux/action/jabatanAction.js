import Axios from "axios";
import { API_URL } from "../../utils/constants";

export const setDataJabatan = () => (dispatch) => {
  Axios.get(`${API_URL}jabatan`)
    .then((result) => {
      const responseAPI = result.data;
      // console.log(responseAPI);
      dispatch({ type: "UPDATE_DATA_JABATAN", payload: responseAPI.data });
    })
    .catch((err) => {
      console.log("error", err);
    });
};
