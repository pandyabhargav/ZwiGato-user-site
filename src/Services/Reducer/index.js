import { combineReducers } from "redux";
import authReducer from "./Authsingup";
import authReducer2 from "./Authlogin";
import authReducer3 from "./Authloout";



const rootReducer = combineReducers({
   authReducer,
   authReducer2,
   authReducer3
});


export default rootReducer;