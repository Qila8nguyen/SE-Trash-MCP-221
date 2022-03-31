import { createAsyncThunk } from "@reduxjs/toolkit";
import { LayoutState } from "../store";

export const fetchUserFromMongo = createAsyncThunk<LayoutState, { email: String }>(
  "layout: ",
  async (email, { rejectWithValue }) => {
    const res = await fetch(
      `${process.env.BACK_END_HOST}/layout?email=${email}`
    );
    const json = await res.json();

    if (res.status < 200 || res.status >= 300) {
        return rejectWithValue(json);
    }
    return { layout: json.rights , pending: false, error: false};
  }
);
