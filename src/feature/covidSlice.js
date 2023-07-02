import { createSlice } from '@reduxjs/toolkit';

const covidSlice = createSlice({
    name: 'covid',
    initialState: {
        covidData: null,
        regionsData: null,
    },
    reducers: {
        setCovidData(state, action) {
            state.covidData = action.payload;
        },
        setRegionsData(state, action) {
            state.regionsData = action.payload;
        },
    },
});

export const { setCovidData, setRegionsData } = covidSlice.actions;
export default covidSlice.reducer;
