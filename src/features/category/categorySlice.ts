import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CategoryState {
  category: string;
}

const initCategory: CategoryState = {
  category: "",
};

const categorySlice = createSlice({
  name: "category",
  initialState: initCategory,
  reducers: {
    setCategory(state, action: PayloadAction<string>) {
      state.category = action.payload;
    },
  },
});

export const { setCategory } = categorySlice.actions;
export default categorySlice.reducer;
