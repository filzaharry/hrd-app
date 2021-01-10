import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import karyawan from './karyawan'
import departemen from './departemen'
import jabatan from './jabatan'
import periode from './periode'
import nilaihrd from './nilaihrd'

export default combineReducers({
    karyawan,
    departemen,
    jabatan,
    periode,
    nilaihrd,
    form: formReducer
})