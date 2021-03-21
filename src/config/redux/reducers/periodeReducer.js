const initialStatePeriode = {
  dataPeriode: [],
}

const periodeReducer = (state = initialStatePeriode, action) => {
  if(action.type === 'UPDATE_DATA_PERIODE'){
      return {
          ...state,
          dataPeriode: action.payload
      }
  }
  return state;
}

export default periodeReducer;