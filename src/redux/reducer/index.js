import { combineReducers } from "@reduxjs/toolkit";
import auth from "./auth";
import users from "./users";
import ticket from "./ticket";
import admin from './admin'
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

const authConfig = {
  key: "auth",
  storage,
};

const usersConfig = {
  key: "users",
  storage,
};

const ticketConfig = {
  key: "ticket",
  storage,
};

const adminConfig = {
  key: "admin",
  storage,
};


const reducer = combineReducers({
  auth: persistReducer(authConfig, auth),
  users: persistReducer(usersConfig, users),
  ticket: persistReducer(ticketConfig, ticket),
  admin: persistReducer(adminConfig, admin)
});

export default reducer;
