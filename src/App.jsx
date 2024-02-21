import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
	About,
	AdvanceJava,
	CPP,
	CoreJava,
	DSA,
	Dashboard,
	Database,
	Dotnet,
	Error,
	HomeLayout,
	Landing,
	Login,
	Register,
	SDM,
	SingleDayPage,
	WPT,
} from "./pages";
// loaders
import { loader as cppLoader } from "./pages/CPP";
import { loader as singlePageLoader } from "./pages/SingleDayPage";

// actions
import { actions as registerAction } from "./pages/Register";
import { actions as loginAction } from "./pages/Login";

import ErrorElement from "./components/ErrorElement";
import { store } from "./store";
const router = createBrowserRouter([
	{
		path: "/",
		element: <Landing />,
		errorElement: <Error />,
	},
	{
		path: "/",
		element: <HomeLayout />,
		errorElement: <Error />,
		children: [
			{
				path: "advance-java",
				element: <AdvanceJava />,
			},
			{
				path: "cpp/:id",
				element: <SingleDayPage />,
				loader: singlePageLoader,
				errorElement: <ErrorElement />,
			},
			{
				path: "core-java",
				element: <CoreJava />,
			},
			{
				path: "cpp",
				element: <CPP />,
				loader: cppLoader,
			},
			{
				path: "about",
				element: <About />,
			},
			{
				path: "dashboard",
				element: <Dashboard />,
			},
			{
				path: "database",
				element: <Database />,
			},
			{
				path: "dsa",
				element: <DSA />,
			},
			{
				path: "dotnet",
				element: <Dotnet />,
			},
			{
				path: "sda",
				element: <SDM />,
			},
			{
				path: "wpt",
				element: <WPT />,
			},
		],
	},
	{
		path: "/login",
		element: <Login />,
		errorElement: <Error />,
		action: loginAction(store),

	},
	{
		path: "/register",
		element: <Register />,
		errorElement: <Error />,
		action: registerAction,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
