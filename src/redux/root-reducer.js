import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // для localstorage
// import sessionStorage - для сессий

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["cart"] // что сохранять
};

const rootReducer = combineReducers({
	user: userReducer,
	cart: cartReducer
});

export default persistReducer(persistConfig, rootReducer);
