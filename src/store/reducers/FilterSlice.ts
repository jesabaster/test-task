import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IFilterState {
  filters: {
    colour: Array<string>;
    shape: Array<string>;
  };
  allFilters: {
    colour: Array<string>;
    shape: Array<string>;
  };
}

const initialState: IFilterState = {
  filters: {
    colour: [],
    shape: [],
  },
  allFilters: {
    colour: ["black", "tortoise", "coloured", "crystal", "dark", "bright"],
    shape: ["square", "rectangle", "round", "cat-eye"],
  },
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setColour: (state, action: PayloadAction<string>) => {
      const contains = !!state.filters.colour.filter(
        (e) => e === action.payload
      ).length;

      if (contains) {
        state.filters.colour = state.filters.colour.filter(
          (e) => e !== action.payload
        );
      } else {
        state.filters.colour = [...state.filters.colour, action.payload];
      }
    },
    setColours: (state, action: PayloadAction<string[]>) => {
      state.filters.colour = action.payload;
    },
    setShape: (state, action: PayloadAction<string>) => {
      const contains = !!state.filters.shape.filter((e) => e === action.payload)
        .length;

      if (contains) {
        state.filters.shape = state.filters.shape.filter(
          (e) => e !== action.payload
        );
      } else {
        state.filters.shape = [...state.filters.shape, action.payload];
      }
    },
    setShapes: (state, action: PayloadAction<string[]>) => {
      state.filters.shape = action.payload;
    },
  },
});

export default filterSlice.reducer;
