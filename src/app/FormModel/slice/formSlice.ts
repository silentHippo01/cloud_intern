import { createSlice } from "@reduxjs/toolkit";
import { FormSchema } from './../types/FormSchema';
import { ISex } from "./../types/FormSchema";
import { sendData } from "../services/sendFormData";

const initialState: FormSchema = {
    data: {
        Phone: '',
        Email: '',
        Nickname: '',
        Name: '',
        Surname: '',
        Sex: ISex.Man,
        advantage: ['', '', ''],
        checkbox1: false,
        checkbox2: false,
        checkbox3: false,
        checkbox4: false,
        radioGroup: '',
        About: '',
    },
    error: undefined,
    isLoading: false,
    success: undefined,
}

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        addData: (state, action) => {
            state.data = {...state.data, ...action.payload}
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(sendData.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(sendData.fulfilled, (state, action) => {
                state.success = true;
                state.isLoading = true;
            })
            .addCase(sendData.rejected, (state, action) => {
                state.error = true;
                state.isLoading = false;
            })
    }
})

export const { actions: formActions } = formSlice;
export const { reducer: formReducer } = formSlice;
