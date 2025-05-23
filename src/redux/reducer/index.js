import { combineReducers } from "@reduxjs/toolkit";
import auth from './auth'
import persistReducer from "redux-persist/es/persistReducer";
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: "auth",
    storage
}

const reducer = combineReducers({
    auth: persistReducer(persistConfig, auth),
})

export default reducer