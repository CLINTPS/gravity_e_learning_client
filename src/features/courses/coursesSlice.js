import { createSlice } from "@reduxjs/toolkit";
import { fetchCourses, addCourse } from "./coursesActions";

const coursesSlice = createSlice({
  name: "courses",
  initialState: {
    courses: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCourses.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.courses = payload;
      })
      .addCase(fetchCourses.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(addCourse.fulfilled, (state, { payload }) => {
        state.courses.push(payload);
      });
  },
});

export default coursesSlice.reducer;
