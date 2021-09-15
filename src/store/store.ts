
import reduxThunk from "redux-thunk";
import  {createStore,applyMiddleware}  from "redux";
import  reducers from "../store/reducer"
const store = createStore(
    reducers,
    applyMiddleware(reduxThunk)
  );

  export default store