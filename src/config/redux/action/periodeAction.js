import Axios from "axios";
import { API_URL } from "../../utils/constants";

export const setDataPeriode = () => (dispatch) => {
  Axios.get(`${API_URL}periode`)
    .then((result) => {
      const responseAPI = result.data;
      // console.log(responseAPI);
      dispatch({ type: "UPDATE_DATA_PERIODE", payload: responseAPI.data });
    })
    .catch((err) => {
      console.log("error", err);
    });
};
