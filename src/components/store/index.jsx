import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices/UserSlice";
import { authSlice } from "./slices/AuthSlice";

const store = configureStore({
    reducer: {
        users: userSlice.reducer,
        auth: authSlice.reducer
    }
});
export default store;

// Persisitor configuration
//npm install redux-persist
// import { configureStore } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// // Import your reducers
// import rootReducer from './reducers';

// // Configuration for Redux Persist
// const persistConfig = {
//   key: 'root',
//   storage,
//   // Add any additional configuration options if needed
// };

// // Create the persisted reducer
// const persistedReducer = persistReducer(persistConfig, rootReducer);

// // Create the store
// export const store = configureStore({
//   reducer: persistedReducer,
// });

// // Create the persistor
// export const persistor = persistStore(store);

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';

// import { store, persistor } from './store';
// import App from './App';

// ReactDOM.render(
//   <Provider store={store}>
//     <PersistGate loading={null} persistor={persistor}>
//       <App />
//     </PersistGate>
//   </Provider>,
//   document.getElementById('root')
// );

