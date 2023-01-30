import { combineReducers, configureStore } from "@reduxjs/toolkit";

import collectionReducer from "./reducers/CollectionSlice";
import filterReducer from "./reducers/FilterSlice";

const rootReducer = combineReducers({
  collectionReducer,
  filterReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
