import {combineReducers} from "redux";
import list from "./list";
import detailes from "./details"
import user from "./user"

let reducer = combineReducers({
    list,
    detailes,
    user
})

export default reducer;