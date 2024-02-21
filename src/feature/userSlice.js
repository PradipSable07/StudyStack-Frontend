import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {

	user: {
		prnno: "72032638",
		password: "secret",
		firstname: "flash",
		lastname: "boy",
		email: "flashboy@gmail.com",
	},
	isSidebarOpen: true,
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		loginUser: (state, action) => {
			console.log("loginUser");
			const user = { ...action.payload.user, token: action.payload.jwt };
			state.user = user;
			localStorage.setItem("user", JSON.stringify(user));
		},
		logoutUser: (state) => {
			console.log("loginUser");
			state.user = null;
			localStorage.clear();
			localStorage.removeItem("user");
			toast.success("Logged out successfully");
		},
		toggleSidebar: (state) => {
			state.isSidebarOpen = !state.isSidebarOpen;
		},
	},

//   user: "Tejas",
//   prnno:"201847369" ,//default value for the PRN number of current
//   firstname:"Tejas",
//   lastname:"Pinjarkar",
//   email:"tupinjarkar@gmail.com",
//   isSidebarOpen: true,
// };


export const { loginUser, logoutUser, toggleSidebar } = userSlice.actions;
export default userSlice.reducer;
