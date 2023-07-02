import { createSlice } from '@reduxjs/toolkit';

const indonesiaSlice = createSlice({
    name: 'indonesia',
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

export const { setCovidData, setRegionsData } = indonesiaSlice.actions;
export default indonesiaSlice.reducer;
