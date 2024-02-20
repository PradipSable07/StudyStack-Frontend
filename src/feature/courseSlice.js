import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const defaultState = {};

const courseSlice = createSlice({
	name: "cart",
	initialState: defaultState,
	reducers: {},
});
export const {} = courseSlice.actions;
export default courseSlice.reducer;
