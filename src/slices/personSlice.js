// src/features/person/personSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const personSlice = createSlice({
    name: 'person',
    initialState: {
        firstName: '',
        lastName: '',
        address: ''
    },
    reducers: {
        setFirstName: (state, action) => {
            state.firstName = action.payload;
        },
        setLastName: (state, action) => {
            state.lastName = action.payload;
        },
        setAddress: (state, action) => {
            state.address = action.payload;
        }
    }
});

export const { setFirstName, setLastName, setAddress } = personSlice.actions;
export default personSlice.reducer;
