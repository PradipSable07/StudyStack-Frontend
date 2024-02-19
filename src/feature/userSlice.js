import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
	user: "pradip",
	isSidebarOpen: true,
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		loginUser: (state, action) => {
			const user = { ...action.payload.user, token: action.payload.jwt };
			state.user = user;
			localStorage.setItem("user", JSON.stringify(user));
		},
		logoutUser: (state) => {
			state.user = null;
			localStorage.clear();
			localStorage.removeItem("user");
			toast.success("Logged out successfully");
		},
		toggleSidebar: (state) => {
			state.isSidebarOpen = !state.isSidebarOpen;
		},
	},
});

export const { loginUser, logoutUser, toggleSidebar } = userSlice.actions;
export default userSlice.reducer;
