import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/api/courses";

export const fetchCourses = createAsyncThunk(
  "courses/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(API_URL);
      return data;
    } catch (error) {
      return rejectWithValue("Failed to fetch courses");
    }
  }
);

export const addCourse = createAsyncThunk(
  "courses/add",
  async (courseData, { rejectWithValue, getState }) => {
    try {
      const {
        auth: { userInfo },
      } = getState();

      const config = {
        headers: { Authorization: `Bearer ${userInfo?.token}` },
      };

      const { data } = await axios.post(API_URL, courseData, config);
      return data;
    } catch (error) {
      return rejectWithValue("Failed to add course");
    }
  }
);
