import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import ENDPOINT from '../utils/constants/api';

const initialState = {
    covidData: null,
    regionsData: null,
    loading: false,
    error: null,
};

const indonesiaSlice = createSlice({
    name: 'indonesia',
    initialState,
    reducers: {
        setCovidData: (state, action) => {
            state.covidData = action.payload;
        },
        setRegionsData: (state, action) => {
            state.regionsData = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const { setCovidData, setRegionsData, setLoading, setError } = indonesiaSlice.actions;

export const fetchCovidData = () => async (dispatch) => {
    try {
        dispatch(setLoading(true));

        const response = await axios(ENDPOINT.INDONESIA);

        dispatch(setCovidData(response.data.indonesia));
        dispatch(setRegionsData(response.data.regions));
        dispatch(setLoading(false));
    } catch (error) {
        dispatch(setError(error.message));
        dispatch(setLoading(false));
    }
};

export default indonesiaSlice.reducer;
