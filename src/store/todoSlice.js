import {createSlice} from "@reduxjs/toolkit";

const portfolioSlice = createSlice({
    name: 'portfolio',
    initialState: {
        portfolio: []
    },
    reducers: {
        addPortfolio(state, action){

        },
        removePortfolio(state, action){

        },
    }
})

export const {addPortfolio, removePortfolio} = portfolioSlice.actions;
export default portfolioSlice.reducer;