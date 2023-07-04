import { configureStore } from '@reduxjs/toolkit';
import covidReducer from '../feature/covidSlice';
import indonesiaReducer from '../feature/indonesiaSlice';
import addCaseReducer from '../feature/addCaseSlice';
import provincesReducer from '../feature/provincesSlice';

const store = configureStore({
    reducer: {
        covid: covidReducer,
        indonesia: indonesiaReducer,
        addCase: addCaseReducer,
        provinces: provincesReducer,
    },
});

export default store;
