import { createSlice } from "@reduxjs/toolkit";

const foodSlice = createSlice({
    name: "food",
    initialState: {
        foods: [],
        totalPrice: 0,

    },
    reducers: {
        addFood: (state, action) => {
            state.foods.push(action.payload);
            state.totalPrice += action.payload.total;
        }, clearFood: (state) => {
            state.foods = [];
            state.totalPrice = 0;
        }
    },
});

export const { addFood, clearFood } = foodSlice.actions;
export default foodSlice.reducer;