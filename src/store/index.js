import { configureStore } from '@reduxjs/toolkit';
import covidReducer from '../feature/covidSlice';
import indonesiaReducer from '../feature/indonesiaSlice';
import addCaseReducer from '../feature/addCaseSlice';

const store = configureStore({
    reducer: {
        covid: covidReducer,
        indonesia: indonesiaReducer,
        addCase: addCaseReducer,
    },
});

export default store;
