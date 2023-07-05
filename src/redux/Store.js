
import { configureStore, getDefaultMiddleware,createSlice,createAsyncThunk } from '@reduxjs/toolkit';
// import storage from 'redux-persist/lib/storage';

// import { persistReducer, persistStore } from 'redux-persist';

// import thunk from 'redux-thunk';

import Userslice from '../redux/Userslice'

// const persistConfig = {
//   key: 'root',
//   storage,
// }

const persistedReducer = persistReducer(persistConfig, Userslice)

const Store = configureStore({
  reducer: {  
    users: persistedReducer,
  }
  // getDefaultMiddleware: [thunk]
  
});

export default Store;


