import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import karyawan from './karyawan'
import departemen from './departemen'
import jabatan from './jabatan'
import periode from './periode'
import nilai from './nilai'

export default combineReducers({
    karyawan,
    departemen,
    jabatan,
    periode,
    nilai,
    form: formReducer
})