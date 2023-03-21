import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AmountState {
  amount: number;
}

const initAmount: AmountState = {
  amount: 10,
};

const amountSlice = createSlice({
  name: "amount",
  initialState: initAmount,
  reducers: {
    setAmount(state, action: PayloadAction<number>) {
      state.amount = action.payload;
    },
  },
});

export const { setAmount } = amountSlice.actions;
export default amountSlice.reducer;
