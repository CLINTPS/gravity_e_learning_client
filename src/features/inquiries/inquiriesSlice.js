import { createSlice } from "@reduxjs/toolkit";
import { fetchInquiries } from "./inquiriesActions";

const inquiriesSlice = createSlice({
  name: "inquiries",
  initialState: {
    inquiries: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchInquiries.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchInquiries.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.inquiries = payload;
      })
      .addCase(fetchInquiries.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default inquiriesSlice.reducer;
