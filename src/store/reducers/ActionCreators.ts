import axios from "axios";
import { AppDispatch } from "..";
import { ICollectionsResponse } from "../../models/ICollection";
import { collectionSlice } from "./CollectionSlice";

export const fetchCollections = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(collectionSlice.actions.collectionsFetching());
    const { data } = await axios.get<ICollectionsResponse>(
      "https://staging-api.bloobloom.com/user/v1/sales_channels/website/collections"
    );
    dispatch(collectionSlice.actions.collectionsFetchingSuccess(data));
  } catch {
    dispatch(collectionSlice.actions.collectionsFetchingError());
  }
};
