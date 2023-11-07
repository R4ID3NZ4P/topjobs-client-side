import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./layouts/Root";
import Home from "./pages/Home/Home";
import AuthProvider from "./providers/AuthProvider";
import AllJobs from "./pages/AllJobs/AllJobs";
import AppliedJobs from "./pages/AppliedJobs/AppliedJobs";
import AddAJob from "./pages/AddAJob/AddAJob";
import MyJobs from "./pages/MyJobs/MyJobs";
import Blogs from "./pages/Blogs/Blogs"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
		children: [
			{
				path: "/",
				element: <Home></Home>
			},
			{
				path: "/all",
				element: <AllJobs></AllJobs>
			},
			{
				path: "/applied",
				element: <AppliedJobs></AppliedJobs>
			},
			{
				path: "/add",
				element: <AddAJob></AddAJob>
			},
			{
				path: "/myjobs",
				element: <MyJobs></MyJobs>
			},
			{
				path: "/blogs",
				element: <Blogs></Blogs>
			}
		]
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
		<AuthProvider>
			<RouterProvider router={router} />
		</AuthProvider>
	</React.StrictMode>
);
