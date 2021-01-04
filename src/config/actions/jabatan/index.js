import axios from "axios";
import { API_URL } from "../../utils/constants";

export const GET_JABATAN_LIST = "GET_JABATAN_LIST";


export const jabatanAction = () => {
  return (dispatch) => {
    // Make a request for a user with a given ID
    axios
      .get(`${API_URL}jabatan`)
      .then(function (response) {
        // handle success
        // console.log("woy",response);
        dispatch({
          type: GET_JABATAN_LIST,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        dispatch({
          type: GET_JABATAN_LIST,
          payload: {
            data: false,
            errorMessage: false,
          },
        });
      });
  };
};


export const jabatanDeleteAction = (id) => {
  return (dispatch) => {
    // Make a request for a user with a given ID
    axios
      .delete(`${API_URL}jabatan/${id}`)
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
};




