// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
// import rootReducer from "./rootReducer";
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage';

  
// // WHITELIST
// const persistConfig = {
//   key: 'root',
//   storage: storage,
//   whitelist: ['Token','Name'] // only navigation will be persisted
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer)



// export const initializeStore = (initialState = {}) => {
//   const createdStore = createStore(
//     persistedReducer,
//     initialState,
//     composeWithDevTools(applyMiddleware(thunk))
//   );
//   const persistor = persistStore(createdStore)
//   return { createdStore, persistor,initialState}
// };

//sai do init
// import { useMemo } from "react";
// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
// import rootReducer from "./rootReducer";
// import {persistReducer  } from 'redux-persist'
// import storage from 'redux-persist/lib/storage';
// import { constantsProps } from "../redux/constants";
 
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

  

// WHITELIST
const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['Token','InfoUser'] // only navigation will be persisted
};

const persistedReducer = persistReducer(persistConfig, rootReducer)

const createdStore = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const persistor = persistStore(createdStore)

export const initializeStore = (initialState = {}) => {
  return { createdStore, persistor}
};

// let store

// // WHITELIST
// const persistConfig = {
//   key: 'root',
//   storage: storage,
//   whitelist: ['Token','InfoUser'] // only navigation will be persisted
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer)


// function makeStore(initialState = constantsProps) {
//   return createStore(
//     persistedReducer,
//     initialState,
//     composeWithDevTools(applyMiddleware(thunk))
//   )
// }

// export const initializeStore = (preloadedState) => {
//   let _store = store ?? makeStore(preloadedState)

//   // After navigating to a page with an initial Redux state, merge that state
//   // with the current state in the store, and create a new store
//   if (preloadedState && store) {
//     _store = makeStore({
//       ...store.getState(),
//       ...preloadedState,
//     })
//     // Reset the current store
//     store = undefined
//   }

//   // For SSG and SSR always create a new store
//   if (typeof window === 'undefined') return _store
//   // Create the store once in the client
//   if (!store) store = _store

//   return _store
// }

// export function useStore(initialState) {
//   const store = useMemo(() => initializeStore(initialState), [initialState])
//   return store
// }





