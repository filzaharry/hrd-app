import { GET_PERIODE_DETAIL, GET_PERIODE_LIST } from '../../actions/periode';

let initialState = {
    getPeriodeList: false,
    errorPeriodeList: false,
    getPeriodeDetail: false,
    errorPeriodeDetail: false,
    title: "Periode Karyawan Kontrak",
  };

const nilai = (state = initialState, action) => {
  switch (action.type) {
    case GET_PERIODE_LIST:
      return {
        ...state,
        getPeriodeList: action.payload.data,
        errorPeriodeList: action.payload.errorMessage,
      };
  
      case GET_PERIODE_DETAIL:
        return {
          ...state,
          getPeriodeDetail: action.payload.data,
          errorPeriodeDetail: action.payload.errorMessage,
        };

    default:
      return state;
  }
    
};

export default nilai