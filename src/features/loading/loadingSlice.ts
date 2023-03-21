import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LoadingState {
  loading: boolean;
}

const initLoading: LoadingState = {
  loading: true,
};

const loadingSlice = createSlice({
  name: "loading",
  initialState: initLoading,
  reducers: {
    toggleLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});

export const { toggleLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
