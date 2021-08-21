import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to
import thunk from 'redux-thunk';
import authReducer from './reducers/authReducer'
 
const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, authReducer)
 
export default () => {
  let store = createStore(persistedReducer, applyMiddleware(thunk))
  let persistor = persistStore(store)
  return { store, persistor }
}