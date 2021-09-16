import  {combineReducers} from "redux";
import {PostReducer} from "./PostReducer";

const reducers=combineReducers({
    postsDeatils: PostReducer
})

export type State = ReturnType<typeof reducers>

export default reducers