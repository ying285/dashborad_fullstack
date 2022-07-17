import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface apiState {
  name: string;
  data: number;
}

const initialState: apiState = {
  name: "",
  data: 0,
};

const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {
    getName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    getData(state, action: PayloadAction<number>) {
      state.data = action.payload;
    },
  },
});

export const apiActions = apiSlice.actions;
export default apiSlice.reducer;
