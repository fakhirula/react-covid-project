import { createSlice } from '@reduxjs/toolkit';
import provincesData from '../utils/constants/provinces';

const initialState = {
    provinces: provincesData.provinces,
};

const provincesSlice = createSlice({
    name: 'provinces',
    initialState,
    reducers: {
        updateProvinces: (state, action) => {
        state.provinces = action.payload;
        },
    },
});

export const { updateProvinces } = provincesSlice.actions;
export default provincesSlice.reducer;
