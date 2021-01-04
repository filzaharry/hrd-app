import { GET_NILAI_LIST } from '../../actions/nilai';

let initialState = {
    getNilaiList: false,
    errorNilaiList: false,
    title: "Nilai Karyawan Kontrak",
  };

const nilai = (state = initialState, action) => {
  switch (action.type) {
    case GET_NILAI_LIST:
      return {
        ...state,
        getNilaiList: action.payload.data,
        errorNilaiList: action.payload.errorMessage,
      };
  
    default:
      return state;
  }
    
};

export default nilai