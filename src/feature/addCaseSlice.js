import { createSlice } from '@reduxjs/toolkit';

const addCaseSlice = createSlice({
    name: 'addCase',
    initialState: {
        selectedProvinceIndex: '',
        status: '',
        value: 0,
    },
    reducers: {
        setSelectedProvinceIndex(state, action) {
            state.selectedProvinceIndex = action.payload;
        },
        setStatus(state, action) {
            state.status = action.payload;
        },
        setValue(state, action) {
            state.value = action.payload;
        },
        resetForm(state) {
            state.selectedProvinceIndex = '';
            state.status = '';
            state.value = 0;
        },
    },
    });

export const { setSelectedProvinceIndex, setStatus, setValue, resetForm } = addCaseSlice.actions;
export default addCaseSlice.reducer;
