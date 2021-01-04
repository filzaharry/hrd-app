import { GET_KARYAWAN_LIST, GET_KARYAWAN_DETAIL, POST_KARYAWAN_ADD, PUT_KARYAWAN_EDIT, GET_KARYAWAN_FILTER_DEPARTEMEN } from '../../actions/karyawan'

let initialState = {
    getKaryawanList: false,
    errorKaryawanList: false,
    getKaryawanDetail: false,
    errorKaryawanDetail: false,
    getResponseDataKaryawan: false,
    errorResponseDataKaryawan: false,
    getFilterKaryawan: false,
    errorFilterKaryawan: false,
    title: "Karyawan Kontrak",
  };

const karyawan = (state = initialState, action) => {
  switch (action.type) {
    case GET_KARYAWAN_LIST:
      return {
        ...state,
        getKaryawanList: action.payload.data,
        errorKaryawanList: action.payload.errorMessage,
      };

      case GET_KARYAWAN_DETAIL:
        return {
          ...state,
          getKaryawanDetail: action.payload.data,
          errorKaryawanDetail: action.payload.errorMessage,
        };

      case POST_KARYAWAN_ADD:
        return {
          ...state,
          getResponseDataKaryawan: action.payload.data,
          errorResponseDataKaryawan: action.payload.errorMessage,
        };

      case PUT_KARYAWAN_EDIT:
        return {
          ...state,
          getResponseDataKaryawan: action.payload.data,
          errorResponseDataKaryawan: action.payload.errorMessage,
        };


        case GET_KARYAWAN_FILTER_DEPARTEMEN:
        return {
          ...state, 
          getFilterKaryawan: action.payload.data,
          errorFilterKaryawan: action.payload.errorMessage,
        };

  
    default:
      return state;
  }
    
};

export default karyawan
