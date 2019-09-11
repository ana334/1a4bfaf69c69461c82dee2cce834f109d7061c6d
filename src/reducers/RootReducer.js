import { combineReducers } from "redux";
import packages from "./PackagesReducer";

const rootReducer = combineReducers({
	packages,
});

export default rootReducer;
