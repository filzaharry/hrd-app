import { combineReducers } from "redux";
import globalReducer from "./globalReducer";

import karyawanReducer from "./karyawanReducer";
import jabatanReducer from "./jabatanReducer";
import departemenReducer from "./departemenReducer";
import periodeReducer from "./periodeReducer";

import detailKaryawanReducer from "./detailKaryawanReducer"

import createKaryawanReducer from "./createKaryawanReducer";
import createJabatanReducer from "./createJabatanReducer";
import createDepartemenReducer from "./createJabatanReducer";
import createPeriodeReducer from "./createPeriodeReducer"

import nilaiHrdReducer from "./nilaiHrdReducer";

import userReducer from "./userReducer"


const reducer = combineReducers({
  globalReducer,

  karyawanReducer,
  createKaryawanReducer,
  detailKaryawanReducer,

  jabatanReducer,
  createJabatanReducer,

  departemenReducer,
  createDepartemenReducer,

  periodeReducer,
  createPeriodeReducer,

  nilaiHrdReducer,

  userReducer
});

export default reducer;
