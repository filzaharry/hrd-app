const initialStateKaryawan = {
    dataKaryawan: [],
}

const detailKaryawanReducer = (state = initialStateKaryawan, action) => {
    if(action.type === 'DETAIL_DATA_KARYAWAN'){
        return {
            ...state,
            dataKaryawan: action.payload
        }
    }
    return state;
}

export default detailKaryawanReducer;