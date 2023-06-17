import { createAsyncThunk } from "@reduxjs/toolkit";
import { FormSchema } from "../types/FormSchema";

export const sendData = createAsyncThunk<any, FormSchema>('sendData', async (data, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
  
      const response = await fetch('https://api.sbercloud.ru/content/v1/bootcamp/frontend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        const responseData = await response.json();
        return responseData;
      } else {
        throw new Error('Failed to send data');
      }
    } catch (error) {
        console.error('Error:', error);
      throw error;
    }
  });
  