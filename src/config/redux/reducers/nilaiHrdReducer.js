const initialStateNilaiHrd = {
    dataNilaiHrd: [],
}

const detailNilaiHrdReducer = (state = initialStateNilaiHrd, action) => {
    if(action.type === 'NILAI_HRD'){
        return {
            ...state,
            dataNilaiHrd: action.payload
        }
    }
    return state;
}

export default detailNilaiHrdReducer;