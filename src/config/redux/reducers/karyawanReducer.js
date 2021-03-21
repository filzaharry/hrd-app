const initialStateKaryawan = {
    dataKaryawan: [],
}

const karyawanReducer = (state = initialStateKaryawan, action) => {
    if(action.type === 'UPDATE_DATA_KARYAWAN'){
        return {
            ...state,
            dataKaryawan: action.payload
        }
    }
    return state;
}

export default karyawanReducer;