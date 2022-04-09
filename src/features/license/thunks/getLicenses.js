import {createAsyncThunk} from '@reduxjs/toolkit';
import { reducerStates } from '../../../utils'; 

const { Pending, Rejected, Fulfilled } = reducerStates;

// reducer function or thunks go here
const getLicenses = createAsyncThunk(
    'license/getLicenses',
    async ({address}) => {
        // do some async process
        console.log(address); 
        return;
    }
)

export const getLicensesThunk = {
    [getLicenses.pending]: (state, action) => {
        state.status = Pending
    },
    [getLicenses.fulfilled]: (state, { payload } ) => {
        state.list = payload;
        state.status = Fulfilled;
    },
    [getLicenses.rejected]: (state, { payload } ) => {
        state.status = Rejected;
    }
}