import { createAsyncThunk } from "@reduxjs/toolkit";
import { FormData, ISex } from "../types/FormSchema";


export const sendData = createAsyncThunk<any, FormData>(
  'sendData',
  async (data, thunkApi) => {
    try {
      const response = await fetch('https://api.sbercloud.ru/content/v1/bootcamp/frontend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
        .then(res => res.json())

      return response;
    } catch (e) {
      console.log(e);
      return thunkApi.rejectWithValue('error');
    }
  }
)