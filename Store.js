// import mainreducer from "./Services/Reducer";
import { createStore } from "redux";
// import Productreducer from "./service/Reducer/Empreducer";
// import mainreducer from "./service/Reducer";

import { persistStore,persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import mainreducer from "./src/Sevices/Reducer";


const persistConfig = {
    key: 'root',
    storage
  }
  const persistedReducer = persistReducer(persistConfig, mainreducer)

const store = createStore(
    persistedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

let persistor = persistStore(store)
export default store
export {persistor}