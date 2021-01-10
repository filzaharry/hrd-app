import { GET_NILAIHRD_LIST } from '../../actions/nilaihrd';

let initialState = {
    getNilaiHrdList: false,
    errorNilaiHrdList: false,
    title: "Nilai Karyawan Kontrak",
  };

const nilaiHrd = (state = initialState, action) => {
  switch (action.type) {
    case GET_NILAIHRD_LIST:
      return {
        ...state,
        getNilaiList: action.payload.data,
        errorNilaiList: action.payload.errorMessage,
      };
  
    default:
      return state;
  }
    
};

export default nilaiHrd