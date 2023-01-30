import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICollection, ICollectionsResponse } from "../../models/ICollection";

interface ICollectionState {
  currentCollection: ICollection;
  collections: {
    collections: Array<ICollection>;
    isLoading: boolean;
    isError: boolean;
  };
}

const initialState: ICollectionState = {
  currentCollection: {
    name: "Spectacles Women",
    configuration_name: "spectacles-women",
    id: 1,
  },
  collections: {
    collections: [],
    isError: false,
    isLoading: true,
  },
};

export const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    setCollection: (state, action: PayloadAction<ICollection>) => {
      state.currentCollection = action.payload;
    },
    collectionsFetching: (state) => {
      state.collections.isLoading = true;
    },
    collectionsFetchingSuccess: (
      state,
      action: PayloadAction<ICollectionsResponse>
    ) => {
      state.collections.isLoading = false;
      state.collections.collections = action.payload.collections;
    },
    collectionsFetchingError: (state) => {
      state.collections.isLoading = false;
      state.collections.isError = true;
    },
  },
});

export default collectionSlice.reducer;
