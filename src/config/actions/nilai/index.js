import axios from "axios";
import { API_URL } from "../../utils/constants";

export const GET_NILAI_LIST = "GET_NILAI_LIST";

export const nilaiAction = (id) => {
  return (dispatch) => {
    // Make a request for a user with a given ID
    axios
    // nilai masih undefined
      .get(`${API_URL}karyawan?id=${id}`)
      .then(function (response) {
        console.log(response);
        // handle success
        dispatch({
          type: GET_NILAI_LIST,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        console.log(error);
        // handle error
        dispatch({
          type: GET_NILAI_LIST,
          payload: {
            data: false,
            errorMessage: false,
          },
        });
      });
  };
};
