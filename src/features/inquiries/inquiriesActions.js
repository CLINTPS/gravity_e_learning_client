import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/api/inquiries";

export const fetchInquiries = createAsyncThunk(
  "inquiries/fetchAll",
  async (_, { rejectWithValue, getState }) => {
    try {
      const {
        auth: { userInfo },
      } = getState();

      const config = {
        headers: { Authorization: `Bearer ${userInfo?.token}` },
      };

      const { data } = await axios.get(API_URL, config);
      return data;
    } catch (error) {
      return rejectWithValue("Failed to fetch inquiries");
    }
  }
);
